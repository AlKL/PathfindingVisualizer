function Spot(i, j, rows, columns) {
    this.x = i;
    this.y = j;
    this.isStart = this.x === 14 && this.y === 10;
    this.isEnd = this.x === 14 && this.y === 50;
    this.isWall = false;
    this.addneighbours = function (grid) {
        let i = this.x;
        let j = this.y;
        if (j > 0) this.neighbours.push(grid[i][j - 1]);
        if (i > 0) this.neighbours.push(grid[i - 1][j]);
        if (j < columns - 1) this.neighbours.push(grid[i][j + 1]);
        if (i < rows - 1) this.neighbours.push(grid[i + 1][j]);
    };

    //A* attributes
    this.g = 0;
    this.f = 0;
    this.h = 0;
    this.neighbours = [];
    this.previous = undefined;

    //BFS attributes
    this.d = Infinity;
    this.parent = null;
    this.color = null;

    //DFS attribute
    this.visited = false;
}

export default Spot;