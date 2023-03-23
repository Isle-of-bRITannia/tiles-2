import { Tile } from './tiles/api.js';

import { fireGirl, uh, mountainsTrees, bark, clouds, sky } from './tiles/imageTiles/index.js';
import { rasterize } from './tiles/observe/rasterize.js';
import { renderRaster } from './tiles/observe/renderRaster.js';

const width = 600,
      height = 600;

const canvas = document.querySelector('#canvas');
canvas.width = width;
canvas.height = height;

const ctx = canvas?.getContext('2d');

const tile = 
Tile.beside(
  Tile.quad(
    clouds, 
    Tile.quad(
      Tile.quad(
        bark,
        Tile.beside(
          bark,
          sky
        ),
        bark,
        bark
      ),
      sky,
      bark,
      Tile.quad(
        bark,
        sky,
        bark,
        bark
      )
    ), 
    mountainsTrees, 
    bark
  ),
  Tile.quad(
    Tile.quad(
      sky,
      Tile.quad(
        sky,
        sky,
        sky,
        bark
      ),
      Tile.quad(
        sky,
        sky,
        sky,
        bark
      ),
      bark
    ), 
    Tile.beside(
      sky,
      bark
    ), 
    bark, 
    Tile.beside(
      Tile.beside(
        Tile.above(
          Tile.above(
            sky,
            mountainsTrees
          ),
          bark
        ),
        bark
      ),
      bark
    )
  )
);

// const tile = Tile.swirl(
//   Tile.above(
//     Tile.swirl(
//       Tile.above(
//         Tile.pure('red'),
//         fireGirl
//       )
//     ),
//     Tile.beside(
//       uh, 
//       Tile.pure('blue')
//     )
//   )
// );

const raster = rasterize({width, height})(tile);

renderRaster(raster)(ctx);

console.log('done');