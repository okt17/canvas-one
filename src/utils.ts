export function getRandomInt( max: number, min = 0 ): number {
  return Math.floor( Math.random() * ( max - min ) + min );
}

export function getRandomColor(): string {
  return `rgba(${
    Math.random() > 0.5
      ? getRandomInt( 255, 215 )
      : getRandomInt( 50, 0 )
  },${
    Math.random() > 0.5
      ? getRandomInt( 255, 215 )
      : getRandomInt( 50, 0 )
  },${
    Math.random() > 0.5
      ? getRandomInt( 255, 215 )
      : getRandomInt( 50, 0 )
  },${
    Math.random()
  })`;
}

export function sqr ( n: number ): number {
  return n*n;
}

export function distance ( x1: number, y1: number, x2: number, y2: number ): number {
  return Math.sqrt( sqr( x1 - x2 ) + sqr( y1 - y2 ) );
}
