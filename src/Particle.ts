import { getRandomColor } from './utils';
import { Queue } from 'typescript-collections';

class Particle {
  private x: number;
  private y: number;
  private dx: number;
  private dy: number;
  private color: string;
  static POSITION_HISTORY_LENGTH = 10;
  private positionHistory: Queue<{ x: number, y: number }> = new Queue();
  constructor (
    x: number,
    y: number,
    dx: number,
    dy: number,
    color: string = 'white',
  ) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }
  tick = ( maxX = 500, maxY = 500, minX = 0, minY = 0 ) => {
    this.positionHistory.enqueue( {
      x: this.x,
      y: this.y,
    } );

    if ( this.positionHistory.size() > Particle.POSITION_HISTORY_LENGTH ) {
      this.positionHistory.dequeue();
    }

    if ( this.x < minX ) {
      this.x = minX;
      this.dx *= -1;
    }
    else if ( this.x > maxX ) {
      this.x = maxX;
      this.dx *= -1;
    }

    if ( this.y < minY ) {
      this.y = minY;
      this.dy *= -1;
    }
    else if ( this.y > maxY ) {
      this.y = maxY;
      this.dy *= -1;
    }

    this.x += this.dx;
    this.y += this.dy;
  };
  setPosition = ( x: number, y: number ) => {
    this.x = x;
    this.y = y;
  };
  setAcceleration = ( dx: number, dy: number ) => {
    this.dx = dx;
    this.dy = dy;
  };
  getPositionHistory = () => this.positionHistory;
  getX = () => this.x;
  getY = () => this.y;
  getDX = () => this.dx;
  getDY = () => this.dy;
  getColor = () => this.color;
  static getRandomParticle (
    maxX: number,
    maxY: number,
    maxStep: number,
    minStep: number,
  ): Particle {
    return new Particle(
      Math.floor( Math.random() * maxX ),
      Math.floor( Math.random() * maxY ),
      ( Math.random() > 0.5 ? 1 : -1 )
      *
      ( Math.floor( Math.random() * ( maxStep - minStep ) ) + minStep ),
      ( Math.random() > 0.5 ? 1 : -1 )
      *
      ( Math.floor( Math.random() * ( maxStep - minStep ) ) + minStep ),
      getRandomColor(),
    );
  }
}

export default Particle;
