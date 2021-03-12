/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */



function bfs(startNode, endNode) {

    var queue = []; //queue to traverse
    var path = []; //resulting path to return
    var visitedNodes = []; //all traversed nodes
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
                // console.log(visitedNodes);
            } else if (u.neighbours[i] === endNode) {
                endNode.parent = u;
                let x = endNode;
                while (x.parent) {
                    path.push(x);
                    x = x.parent;
                }
                path.push(x);
                // console.log(path);
                return { path, visitedNodes };
            }
        }
    }
    console.log('error');
    // console.log(visitedNodes);
    return { path, visitedNodes };
}



// const setColor = (node, color) => {
//     node.color = color;
//     // document.getElementById(`${node.x}-${node.y}`).className = `node ${color}`;
// };

export default bfs;