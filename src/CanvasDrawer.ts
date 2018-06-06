import Particle from './Particle';
import { getRandomColor } from './utils';

type CanvasDrawerOptions = Partial<{
  backgroundColor: string;
  mainColor: string;
  fullScreen: boolean;
  cycleIntervalMS: number;
  tick ( drawer?: CanvasDrawer ): void;
  mouseMove ( event: MouseEvent, drawer?: CanvasDrawer ): void;
  click ( event: MouseEvent, drawer?: CanvasDrawer ): void;
}>;

const DEFAULT_OPTIONS: CanvasDrawerOptions = {
  backgroundColor: '#FFFFFF',
  mainColor: '#000000',
  fullScreen: true,
  cycleIntervalMS: 1000 / 60,
}

class CanvasDrawer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private mainColor: CanvasDrawerOptions['mainColor'];
  private backgroundColor: CanvasDrawerOptions['backgroundColor'];
  private tickFunction?: CanvasDrawerOptions['tick'];
  private mouseMoveFunction?: CanvasDrawerOptions['mouseMove'];
  private cycleIntervalMS: CanvasDrawerOptions['cycleIntervalMS'];
  private cycleIntervalId?: number;
  constructor (
    canvas: HTMLCanvasElement,
    {
      mainColor = DEFAULT_OPTIONS.mainColor,
      backgroundColor = DEFAULT_OPTIONS.backgroundColor,
      fullScreen = DEFAULT_OPTIONS.fullScreen,
      cycleIntervalMS = DEFAULT_OPTIONS.cycleIntervalMS,
      tick,
      mouseMove,
      click,
    }: CanvasDrawerOptions = DEFAULT_OPTIONS,
  ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext( '2d' );
    this.mainColor = mainColor;
    this.backgroundColor = backgroundColor;
    this.cycleIntervalMS = cycleIntervalMS;
    this.tickFunction = tick;


    if ( fullScreen ) {
      window.addEventListener( 'resize', this.handleWindowResize );
      this.handleWindowResize();
    }
    else {
      this.tick();
    }
    
    if ( typeof mouseMove === 'function' ) {
      this.mouseMoveFunction = mouseMove;
      canvas.addEventListener( 'mousemove', this.handleMouseMove );
    }

    if ( typeof click === 'function' ) {
      canvas.addEventListener( 'click', click );
    }
  }
  /*
    Using arrow function properties instead of class methods
    to avoid using .bind all the time
    These functions will not be present on the prototype
  */
  clear = ( color: string = this.backgroundColor ) => {
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect( 0, 0, this.canvas.width, this.canvas.height );
  };
  drawPoint = ( x: number, y: number, color: string = this.mainColor, size = 4 ) => {
    this.ctx.fillStyle = color;
    this.ctx.fillRect( x, y, size, size );
  };
  drawPointArc = ( x: number, y: number, color: string, r1 = 5, r0 = 1 ) => {
    r1 = Math.max( r1, r0 );

    const grd = this.ctx.createRadialGradient( x, y, r0, x, y, r1 );
    grd.addColorStop( 0, color );
    grd.addColorStop( 1, 'white' );

    this.ctx.beginPath();
    this.ctx.arc( x, y, r1, 0, Math.PI * 2, false );

    this.ctx.fillStyle = grd;
    this.ctx.fill();
  };
  dotSymbol = String.fromCharCode( 9679 );
  drawDot = ( x: number, y: number, color: string, size = 4 ) => {
    this.ctx.fillStyle = color;
    this.ctx.font = `${size*5}px Verdana`;
    this.ctx.fillText( this.dotSymbol, x, y );
  };
  drawParticle = ( particle: Particle ) => {
    const
      history = particle.getPositionHistory(),
      color = particle.getColor();

    let j: number;
    for ( j = 0; j < history.length; ++j ) {
      this.drawDot(
        history[j].x,
        history[j].y,
        color,
        j % 2 === 0 ? j / 2 : ( j + 1 ) / 2,
      );
    }

    this.drawDot(
      particle.getX(),
      particle.getY(),
      color,
      j % 2 === 0 ? j / 2 : ( j + 1 ) / 2,
    );
  };
  handleWindowResize = () => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    
    this.tick();
  };
  handleMouseMove = ( event: MouseEvent ) => {
    this.mouseMoveFunction( event, this );
  };
  tick = () => {
    this.clear();

    if ( typeof this.tickFunction === 'function' ) {
      this.tickFunction( this );
    }
  };
  startCycle = () => {
    this.cycleIntervalId = setInterval( this.tick, this.cycleIntervalMS );
  };
  stopCycle = () => {
    clearTimeout( this.cycleIntervalId );
    this.cycleIntervalId = undefined;
  };
  getWidth = () => this.canvas.width;
  getHeight = () => this.canvas.height;
}

export default CanvasDrawer;
