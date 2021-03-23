/* eslint-disable no-unused-vars */

const randomWall = (grid) => {
    console.log('Random Wall');
    const wallPath = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (Math.random(1) < 0.2 && !grid[i][j].isStart && !grid[i][j].isEnd) {
                document.getElementById(`${i}-${j}`).className = 'node node-wall';
                grid[i][j].isWall = true;
            }

        }
    }





    return wallPath;
};

export default randomWall;