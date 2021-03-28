const stairWall = (grid) => {
    const wallPath = [];

    let j = 1;
    for (let i = grid.length - 5; i > 0; i--) {
        if (!grid[i][j].isStart && !grid[i][j].isEnd) {
            grid[i][j].isWall = true;
            wallPath.push(grid[i][j]);
        }
        j++;
    }

    for (let i = 2; i < grid.length - 4; i++) {
        if (!grid[i][j].isStart && !grid[i][j].isEnd) {
            grid[i][j].isWall = true;
            wallPath.push(grid[i][j]);
        }
        j++;
    }

    for (let i = grid.length - 6; j < 60; i--) {
        if (!grid[i][j].isStart && !grid[i][j].isEnd) {
            grid[i][j].isWall = true;
            wallPath.push(grid[i][j]);
        }
        j++;
    }
    return wallPath;
};

export default stairWall;