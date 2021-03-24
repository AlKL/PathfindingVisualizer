/* eslint-disable no-unused-vars */
const stairWall = (grid) => {
    // document.getElementById(`${grid.length - 2}-${1}`).className = 'node node-wall';

    const wallPath = [];

    let j = 1;
    for (let i = grid.length - 2; i > 0; i--) {
        if (!grid[i][j].isStart && !grid[i][j].isEnd) {
            // document.getElementById(`${i}-${j}`).className = 'node node-wall';
            grid[i][j].isWall = true;
            wallPath.push(grid[i][j]);
        }
        j++;
    }

    for (let i = 2; i < grid.length - 1; i++) {
        if (!grid[i][j].isStart && !grid[i][j].isEnd) {
            // document.getElementById(`${i}-${j}`).className = 'node node-wall';
            grid[i][j].isWall = true;
            wallPath.push(grid[i][j]);
        }
        j++;
    }

    for (let i = grid.length - 3; i > 0; i--) {
        if (!grid[i][j].isStart && !grid[i][j].isEnd) {
            // document.getElementById(`${i}-${j}`).className = 'node node-wall';
            grid[i][j].isWall = true;
            wallPath.push(grid[i][j]);
        }
        j++;
    }

    let k = 2;
    // console.log(grid[0].length);
    while (j < grid[0].length - 1) {
        if (!grid[k][j].isStart && !grid[k][j].isEnd) {
            // document.getElementById(`${k}-${j}`).className = 'node node-wall';
            grid[k][j].isWall = true;
            wallPath.push(grid[k][j]);
        }
        k++;
        j++;
    }

    return wallPath;
};

export default stairWall;