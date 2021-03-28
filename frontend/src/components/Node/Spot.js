function Spot(i, j, rows, columns) {
    this.x = i;
    this.y = j;
    this.isStart = this.x === 14 && this.y === 10;
    this.isEnd = this.x === 14 && this.y === 50;
    // this.isStart = this.x === 10 && this.y === 6;
    // this.isEnd = this.x === 10 && this.y === 34;
    this.isWall = false;
    // if (Math.random(1) < 0.2) {
    //     this.isWall = true;
    // }
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
    this.d = Infinity;      //node's distance
    this.parent = null;     //node's parent
    this.color = null;      //node's color

    //DFS attribute
    this.visited = false;
}

export default Spot;