/* eslint-disable no-unused-vars */
const visualizeShortestPath = (shortestPathNodes, speed) => {
    const reversed = shortestPathNodes.reverse();
    for (let k = shortestPathNodes.length - 1; k >= 0; k--) {
        setTimeout(() => {
            const node = reversed[k];
            if (node.isStart) {
                document.getElementById(`${node.x}-${node.y}`).className = 'node node-start';
            } else if (node.isEnd) {
                document.getElementById(`${node.x}-${node.y}`).className = 'node node-end';
            } else {
                document.getElementById(`${node.x}-${node.y}`).className = 'node node-shortest-path';
            }
        }, speed * k);
    }
};

const visualizePath = (algoPath, visitedNodes, visSpeed) => {
    let speed;
    switch (visSpeed) {
        case 'Fast':
            speed = 20;
            break;
        case 'Medium':
            speed = 25;
            break;
        case 'Slow':
            speed = 30;
    }

    for (let i = 0; i <= visitedNodes.length; i++) {
        if (i === visitedNodes.length) {
            setTimeout(() => {
                visualizeShortestPath(algoPath, speed);
            }, speed * i);
        } else {
            setTimeout(() => {
                const node = visitedNodes[i];
                if (node.isStart) {
                    document.getElementById(`${node.x}-${node.y}`).className = 'node node-start';
                } else if (node.isEnd) {
                    document.getElementById(`${node.x}-${node.y}`).className = 'node node-end';
                } else {
                    document.getElementById(`${node.x}-${node.y}`).className = 'node node-visited';
                }
            }, speed * i);
        }
    }
};

export default visualizePath;