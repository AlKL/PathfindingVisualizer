const recursiveWall = (grid, skew) => {
    let height = grid.length;
    let width = grid[0].length;
    let wallPath = [];
    divide(grid, 0, 0, width, height, chooseOrientation(width, height, skew), wallPath, skew);
    return wallPath;
};

const divide = (grid, x, y, width, height, orientation, wallPath, skew) => {
    if (width < 3 || height < 3) {
        return;
    }

    let horizontal;

    if (orientation === 'HORIZONTAL') {
        horizontal = true;
    } else {
        horizontal = false;
    }

    let wallX = x + (horizontal ? 0 : veryRand(1, width - 2));
    let wallY = y + (horizontal ? veryRand(1, height - 2) : 0);

    var passStart = Math.random(1) > 0.5 ? true : false;

    let passageX = wallX + (horizontal ? (passStart ? width - 1 : 0) : 0);
    let passageY = wallY + (horizontal ? 0 : (passStart ? height - 1 : 0));

    let dx = horizontal ? 1 : 0;
    let dy = horizontal ? 0 : 1;

    let len = horizontal ? width : height;

    for (let i = 0; i < len; i++) {
        if (!(wallX === passageX) || !(wallY === passageY)) {
            if (!(grid[wallY][wallX].isStart) && !(grid[wallY][wallX].isEnd)) {
                wallPath.push(grid[wallY][wallX]);
                grid[wallY][wallX].isWall = true;
            }
        }
        wallX += dx;
        wallY += dy;
    }

    let newX = x;
    let newY = y;
    let w = horizontal ? width : wallX - x;
    let h = horizontal ? wallY - y : height;
    divide(grid, newX, newY, w, h, chooseOrientation(w, h, skew), wallPath, skew);

    newX = horizontal ? x : wallX + 1;
    newY = horizontal ? wallY + 1 : y;
    w = horizontal ? width : x + width - wallX - 1;
    h = horizontal ? y + height - wallY - 1 : height;
    divide(grid, newX, newY, w, h, chooseOrientation(w, h, skew), wallPath, skew);
};

const veryRand = (min, max) => {
    return min >= max ? min : Math.floor(Math.random() * (max - min + 1)) + min;
};

const chooseOrientation = (width, height, skew) => {

    let y;

    switch (skew) {
        case 'widthHeightBased':
            if (width < height) {
                return 'HORIZONTAL';
            } else if (width > height) {
                return 'VERTICAL';
            } else {
                y = (Math.random() >= 0.5) ? 1 : 0;
                return y === 0 ? 'HORIZONTAL' : 'VERTICAL';
            }
        case 'horizontalBased':
            y = (Math.random() >= 0.6) ? 1 : 0;
            return y === 0 ? 'HORIZONTAL' : 'VERTICAL';
        case 'verticalBased':
            y = (Math.random() >= 0.35) ? 1 : 0;
            return y === 0 ? 'HORIZONTAL' : 'VERTICAL';
    }

};

export default recursiveWall;