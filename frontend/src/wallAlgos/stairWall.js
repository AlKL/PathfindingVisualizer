/* eslint-disable no-unused-vars */
const stairWall = (grid) => {
    // document.getElementById(`${grid.length - 2}-${1}`).className = 'node node-wall';

    const wallPath = [];

    let j = 1;
    for (let i = grid.length - 5; i > 0; i--) {
        if (!grid[i][j].isStart && !grid[i][j].isEnd) {
            // document.getElementById(`${i}-${j}`).className = 'node node-wall';
            grid[i][j].isWall = true;
            wallPath.push(grid[i][j]);
        }
        j++;
    }

    for (let i = 2; i < grid.length - 4; i++) {
        if (!grid[i][j].isStart && !grid[i][j].isEnd) {
            // document.getElementById(`${i}-${j}`).className = 'node node-wall';
            grid[i][j].isWall = true;
            wallPath.push(grid[i][j]);
        }
        j++;
    }

    for (let i = grid.length - 6; i > 7; i--) {
        if (!grid[i][j].isStart && !grid[i][j].isEnd) {
            // document.getElementById(`${i}-${j}`).className = 'node node-wall';
            grid[i][j].isWall = true;
            wallPath.push(grid[i][j]);
        }
        j++;
    }

    return wallPath;
};

export default stairWall;