import {Alg} from '../algebra.js';

const inThisDir = (imagePath) => (
  new URL(imagePath, 'http://localhost/src/tiles/imageTiles/').pathname
);

const imgTile = (imgSrc) => {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = function() {
        resolve(Alg.fromImage(img));
    };
    img.src = inThisDir(imgSrc);
  });
}

export const uh = await imgTile('./uh.png');
export const fireGirl = await imgTile('./fireGirl.jpg');
export const bark = await imgTile('./bark.jpg');
export const branches = await imgTile('./branches.jpg');
export const clouds = await imgTile('./clouds.webp');
export const mountainsTrees = await imgTile('./mountains_trees.jpg');
export const sun = await imgTile('./sun.webp');
export const sky = await imgTile('./clearsky.jpeg');