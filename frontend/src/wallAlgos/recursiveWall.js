/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
const recursiveWall = (grid) => {
    // let height = 20;
    // let width = 18;
    let height = 13;
    let width = 41;

    // divide(grid, 0, 0, width, height, choose_orientation(width, height))
    divide(grid, 0, 0, width, height, chooseOrientation(width, height));
};

const divide = () => {
    console.log('lol');
};

const veryRand = (min, max) => {
    return min >= max ? min : Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};


const chooseOrientation = (width, height) => {
    if (width < height) {
        return 'HORIZONTAL';
    } else if (width > height) {
        return 'VERTICAL';
    } else {
        let y = (Math.random() >= 0.5) ? 1 : 0;
        return y === 0 ? 'HORIZONTAL' : 'VERTICAL';
    }
};

export default recursiveWall;


// const divide = (grid, x, y, width, height, orientation) => {
//     var rowCenter = Math.floor(grid.length / 2);
//     var columnCenter = Math.floor(grid[0].length / 2);

//     //top left quadrant - make a right wall
//     const randRightWall = randomDoor(x, rowCenter - 1);
//     for (let i = 0; i <= rowCenter; i++) {
//         if (!(i === randRightWall)) {
            // document.getElementById(`${i}-${columnCenter}`).className = 'node node-wall';
//             grid[i][columnCenter].isWall = true;
//         }
//     }

//     //top right quadrant - make a bottom wall
//     const randRightBottomWall = randomDoor(columnCenter + 1, columnCenter * 2);
//     for (let i = columnCenter + 1; i <= (columnCenter * 2); i++) {
//         if (!(i === randRightBottomWall)) {
            // document.getElementById(`${rowCenter}-${i}`).className = 'node node-wall';
//             grid[rowCenter][i].isWall = true;
//         }
//     }

//     //bottom right quadrant - make a left wall
//     const randBottomWall = randomDoor(rowCenter + 1, rowCenter * 2);
//     for (let i = rowCenter + 1; i <= rowCenter * 2; i++) {
//         if (!(i === randBottomWall)) {
//             document.getElementById(`${i}-${columnCenter}`).className = 'node node-wall';
//             grid[i][columnCenter].isWall = true;
//         }
//     }

//     //bottom left quadrant - make a top wall
//     const randLeftBottomWall = randomDoor(y, columnCenter - 1);
//     for (let i = 0; i <= columnCenter - 1; i++) {
//         if (!(i === randLeftBottomWall)) {
//             document.getElementById(`${rowCenter}-${i}`).className = 'node node-wall';
//             grid[rowCenter][i].isWall = true;
//         }
//     }

// };


// const perimeterWalls = (grid) => {
//     let j = 0;
//     for (let i = 0; i < grid[0].length; i++) {
//         grid[0][j].isWall = true;
//         grid[grid.length - 1][j].isWall = true;
//         document.getElementById(`0-${j}`).className = 'node node-wall';
//         document.getElementById(`${grid.length - 1}-${j}`).className = 'node node-wall';
//         j++;
//     }
//     j = 0;
//     for (let i = 0; i < grid.length; i++) {
//         grid[j][0].isWall = true;
//         grid[j][grid[0].length - 1].isWall = true;
//         document.getElementById(`${j}-0`).className = 'node node-wall';
//         document.getElementById(`${j}-${grid[0].length - 1}`).className = 'node node-wall';
//         j++;
//     }
// };

// const divide = (grid, x, y, width, height, orientation) => {
//     if (width < 5 || height < 5) {
//         return;
//     }

//     let horizontal;

//     if (orientation === 'HORIZONTAL') {
//         horizontal = true;
//     } else {
//         horizontal = false;
//     }

//     let wallX = x + (horizontal ? 0 : veryRand(0, width - 2));
//     let wallY = y + (horizontal ? veryRand(0, height - 2) : 0);

//     let passageX = wallX + (horizontal ? veryRand(0, width - 1) : 0);
//     let passageY = wallY + (horizontal ? 0 : veryRand(0, height - 1));

//     let dx = horizontal ? 1 : 0;
//     let dy = horizontal ? 0 : 1;

//     let len = horizontal ? width : height;
//     // let dir = horizontal ? 1 : 2;

//     for (let i = 0; i < len; i++) {
//         if (!(wallX === passageX) || !(wallY === passageY)) {
//             document.getElementById(`${wallY}-${wallX}`).className = 'node node-wall';
//         }
//         wallX += dx;
//         wallY += dy;
//     }

//     let newX = x;
//     let newY = y;
//     let w = horizontal ? width : wallX - x + 1;
//     let h = horizontal ? wallY - y + 1 : height;
//     divide(grid, newX, newY, w, h, chooseOrientation(w, h));

//     newX = horizontal ? x : wallX + 1;
//     newY = horizontal ? wallY + 1 : y;
//     w = horizontal ? width : x + width - wallX - 1;
//     h = horizontal ? y + height - wallY - 1 : height;
//     divide(grid, newX, newY, w, h, chooseOrientation(w, h));
// };

// const divide = (grid, x, y, width, height, orientation) => {
//     if (width < 4 || height < 4) {
//         return;
//     }

//     let horizontal;

//     if (orientation === 'HORIZONTAL') {
//         horizontal = true;
//     } else {
//         horizontal = false;
//     }

//     // # where will the wall be drawn from?
//     // wx = x + (horizontal ? 0 : rand(width-2))
//     // wy = y + (horizontal ? rand(height-2) : 0)
//     let wallX = x + (horizontal ? 0 : randomInt(width - 2));
//     let wallY = y + (horizontal ? randomInt(height - 2) : 0);

//     // # where will the passage through the wall exist?
//     // px = wx + (horizontal ? rand(width) : 0)
//     // py = wy + (horizontal ? 0 : rand(height))
//     let passageX = wallX + (horizontal ? randomInt(width) : 0);
//     let passageY = wallY + (horizontal ? 0 : randomInt(height));

//     // # what direction will the wall be drawn?
//     // dx = horizontal ? 1 : 0
//     // dy = horizontal ? 0 : 1
//     let dx = horizontal ? 1 : 0;
//     let dy = horizontal ? 0 : 1;

//     // # how long will the wall be?
//     // length = horizontal ? width : height
//     let len = horizontal ? width : height;

//     // # what direction is perpendicular to the wall?
//     let dir = horizontal ? 1 : 2;

//     for (let i = 0; i < len; i++) {
//         if (!(wallX === passageX) || !(wallY === passageY)) {
//             document.getElementById(`${wallY}-${wallX}`).className = 'node node-wall';
//         }
//         wallX += dx;
//         wallY += dy;
//     }

//     // nx, ny = x, y
//     // w, h = horizontal ? [width, wy-y+1] : [wx-x+1, height]
//     // divide(grid, nx, ny, w, h, choose_orientation(w, h))
//     let newX = x;
//     let newY = y;
//     let w = horizontal ? width : wallX - x + 1;
//     let h = horizontal ? wallY - y + 1 : height;
//     divide(grid, newX, newY, w, h, chooseOrientation(w, h));

//     // nx, ny = horizontal ? [x, wy+1] : [wx+1, y]
//     // w, h = horizontal ? [width, y+height-wy-1] : [x+width-wx-1, height]
//     // divide(grid, nx, ny, w, h, choose_orientation(w, h))
//     newX = horizontal ? x : wallX + 1;
//     newY = horizontal ? wallY + 1 : y;
//     w = horizontal ? width : x + width - wallX - 1;
//     h = horizontal ? y + height - wallY - 1 : height;
//     divide(grid, newX, newY, w, h, chooseOrientation(w, h));
// };