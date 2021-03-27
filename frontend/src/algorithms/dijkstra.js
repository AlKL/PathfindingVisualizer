/* eslint-disable no-unused-vars */

const dijkstra = (grid, startNode, endNode) => {
    let s = startNode;
    s.d = 0;

    let visited = [];
    let path = [];
    let queue = [];

    queue.push(s);

    while (queue.length > 0) {
        let u = queue.shift();
        u.visited = true;
        visited.push(u);

        for (let k = 0; k < u.neighbours.length; k++) {
            if (!u.neighbours[k].visited && !(u.neighbours[k].isWall) && !(u.neighbours[k] === endNode)) {
                Relax(u, u.neighbours[k], 1);
                u.neighbours[k].visited = true;
                queue.push(u.neighbours[k]);
            } else if (u.neighbours[k] === endNode) {
                visited.push(endNode);
                endNode.parent = u;
                let x = endNode;
                while (x.parent) {
                    path.push(x);
                    x = x.parent;
                }
                path.push(x);
                // console.log(path);
                return { path, visited };
            }
        }
    }
};

const Relax = (u, k, w) => {
    if (k.d > (u.d + w)) {
        k.d = u.d + w;
        k.parent = u;
    }
};

export default dijkstra;