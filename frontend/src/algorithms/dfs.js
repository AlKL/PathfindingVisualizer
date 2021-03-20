var path = [];
var visitedNodes = [];
var found = false;

const recDfs = (startNode, endNode) => {
    let u;

    u = startNode;
    u.visited = true;
    visitedNodes.push(u);

    for (let i = 0; i < u.neighbours.length; i++) {
        // if (!u.neighbours[i].visited && !(u === endNode) && !u.isWall) {
        if (!u.neighbours[i].visited && !(u === endNode) && !u.neighbours[i].isWall) {
            // visitedNodes.push(u);
            recDfs(u.neighbours[i], endNode);
            if (found) {
                path.push(u);
                break;
            }
        } else if (u === endNode) {
            path.push(u);
            visitedNodes.push(u);
            found = true;
            return;
        }
    }
};

const dfs = (startNode, endNode) => {
    path = [];
    visitedNodes = [];
    found = false;
    recDfs(startNode, endNode);
    // visitedNodes.reverse();
    // path.reverse();
    console.log(visitedNodes.length);
    console.log(path.length);
    return { path, visitedNodes };
};

export default dfs;
