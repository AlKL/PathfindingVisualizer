/* eslint-disable no-unused-vars */
const visualizeShortestPath = (shortestPathNodes) => {
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
        }, 50 * k);
    }
};

const visualizePath = (algoPath, visitedNodes) => {
    for (let i = 0; i <= visitedNodes.length; i++) {
        if (i === visitedNodes.length) {
            setTimeout(() => {
                visualizeShortestPath(algoPath);
            }, 50 * i);
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
            }, 50 * i);
        }
    }
};

export default visualizePath;