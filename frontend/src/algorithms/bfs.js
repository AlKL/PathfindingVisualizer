const bfs = (startNode, endNode) => {
    var queue = [];
    var path = [];
    var visitedNodes = [];
    let u;

    startNode.d = 0;
    startNode.color = 'gray';
    queue.push(startNode);
    visitedNodes.push(startNode);

    while (queue.length > 0) {
        u = queue.shift();

        for (var i = 0; i < u.neighbours.length; i++) {
            if ((u.neighbours[i].color === null) && !(u.neighbours[i].isWall) && !(u.neighbours[i] === endNode)) {
                u.neighbours[i].color = 'gray';
                u.neighbours[i].d = u.d + 1;
                u.neighbours[i].parent = u;
                visitedNodes.push(u.neighbours[i]);
                queue.push(u.neighbours[i]);
            }

            else if (u.neighbours[i] === endNode) {
                visitedNodes.push(endNode);
                endNode.parent = u;
                let x = endNode;
                while (x.parent) {
                    path.push(x);
                    x = x.parent;
                }
                path.push(x);
                return { path, visitedNodes };
            }
        }
    }

    return { path, visitedNodes };
};

export default bfs;