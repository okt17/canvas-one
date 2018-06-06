import CanvasDrawer from './CanvasDrawer';
import Particle from './Particle';
import { distance } from './utils';

const
  N_PARTICLES = 100,
  MAGNET_RADIUS = 100,
  MIN_STEP = 1,
  MAX_STEP = 8;

let particles: Particle[] = [];

function tick ( drawer: CanvasDrawer ): void {
  const
    maxX = drawer.getWidth(),
    maxY = drawer.getHeight();

  for ( let i = 0; i < particles.length; ++i ) {
    drawer.drawParticle( particles[i] );
    particles[i].tick( maxX, maxY );
  }
}

function mouseMove ( event: MouseEvent, drawer: CanvasDrawer ): void {
  for ( let i = 0; i < particles.length; ++i ) {
    if (
      distance(
        event.clientX,
        event.clientY,
        particles[i].getX(),
        particles[i].getY(),
      ) < MAGNET_RADIUS
    ) {
      particles[i].setPosition( event.clientX, event.clientY );
    }
  }
}

const SPEED_DELIMETER = 32;

function click ( event: MouseEvent, drawer: CanvasDrawer ): void {
  const
    x = event.clientX,
    y = event.clientY;

  for ( let i = 0; i < particles.length; ++i ) {
    particles[i].setAcceleration(
      Math.floor( ( x - particles[i].getX() ) / SPEED_DELIMETER ),
      Math.floor( ( y - particles[i].getY() ) / SPEED_DELIMETER ),
    );
  }
}

const
  drawer = new CanvasDrawer(
    document.body.appendChild( document.createElement( 'canvas' ) ),
    {
      backgroundColor: 'black',
      fullScreen: true,
      tick,
      mouseMove,
      click,
    },
  ),
  maxX = drawer.getWidth(),
  maxY = drawer.getHeight();

particles = Array( N_PARTICLES );
for ( let i = 0; i < particles.length; ++i ) {
  particles[i] = Particle.getRandomParticle( maxX, maxY, MAX_STEP, MIN_STEP );
}

drawer.startCycle();
