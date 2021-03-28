const aStar = (startNode, endNode) => {
    let openSet = [];
    let closedSet = [];
    let visitedNodes = [];

    openSet.push(startNode);

    while (openSet.length > 0) {
        let leastIndex = 0;

        for (let i = 0; i < openSet.length; i++) {
            if (openSet[i].f < openSet[leastIndex].f) {
                leastIndex = i;
            }
        }

        let current = openSet[leastIndex];

        if (current.x === endNode.x && current.y === endNode.y) {
            let curr = current;
            let path = [];
            while (curr.previous) {
                path.push(curr);
                curr = curr.previous;
            }
            return { path, visitedNodes };
        }

        if (leastIndex > -1) {
            openSet.splice(leastIndex, 1);
        }

        closedSet.push(current);
        visitedNodes.push(current);


        let neighbours = current.neighbours;
        for (let i = 0; i < neighbours.length; i++) {
            let neighbour = neighbours[i];
            if (closedSet.includes(neighbour) || neighbour.isWall) {
                continue;
            }

            let gScore = current.g + 1;
            let gScoreIsBest = false;

            if (!openSet.includes(neighbour)) {
                gScoreIsBest = true;
                neighbour.h = heuristic(neighbour, endNode);
                openSet.push(neighbour);
            } else if (gScore < neighbour.g) {
                gScoreIsBest = true;
            }

            if (gScoreIsBest) {
                neighbour.previous = current;
                neighbour.g = gScore;
                neighbour.f = neighbour.g + neighbour.h;
            }
        }
    }

    return [];
};

const heuristic = (a, b) => {
    let d1 = Math.abs(b.x - a.x);
    let d2 = Math.abs(b.y - a.y);
    return d1 + d2;
};

export default aStar;