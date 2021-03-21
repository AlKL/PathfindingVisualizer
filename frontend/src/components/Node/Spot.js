function Spot(i, j, rows, columns) {
    this.x = i;
    this.y = j;
    // this.isStart = this.x === 3 && this.y === 2;
    // this.isEnd = this.x === 3 && this.y === 18;
    this.isStart = this.x === 10 && this.y === 5;
    this.isEnd = this.x === 10 && this.y === 34;
    this.g = 0;
    this.f = 0;
    this.h = 0;
    this.neighbours = [];
    this.isWall = false;
    // if (Math.random(1) < 0.2) {
    //     this.isWall = true;
    // }
    this.previous = undefined;
    this.addneighbours = function (grid) {
        let i = this.x;
        let j = this.y;
        if (j > 0) this.neighbours.push(grid[i][j - 1]);
        if (i > 0) this.neighbours.push(grid[i - 1][j]);
        if (j < columns - 1) this.neighbours.push(grid[i][j + 1]);
        if (i < rows - 1) this.neighbours.push(grid[i + 1][j]);
    };

    //BFS attributes -> move this into the algorithm
    this.d = Infinity;      //node's distance
    this.parent = null;     //node's parent
    this.color = null;      //node's color

    //DFS attribute
    this.visited = false;
}

export default Spot;