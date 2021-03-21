/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import '../../styles/Menu.css';
import aStar from '../../algorithms/aStar';
import bfs from '../../algorithms/bfs';
import dfs from '../../algorithms/dfs';
import dijkstra from '../../algorithms/dijkstra';
import visualizePath from '../Menu/Visualizer';

const Menu = ({ grid, resetBoard, clearBoard, startNode, endNode }) => {
    const reloadPage = () => {
        window.location.reload();
    };

    const visualizeAstar = async () => {
        await clearBoard();
        const aStarPath = aStar(startNode, endNode);
        visualizePath(aStarPath.path, aStarPath.visitedNodes);
    };

    const visualizeBFS = async () => {
        await clearBoard();
        const bfsPath = bfs(startNode, endNode);
        visualizePath(bfsPath.path, bfsPath.visitedNodes);
    };

    const visualizeDFS = async () => {
        await clearBoard();
        const dfsPath = dfs(startNode, endNode);
        visualizePath(dfsPath.path, dfsPath.visitedNodes);
    };

    const visualizeDijkstra = async () => {
        await clearBoard();
        const dijkstraPath = dijkstra(grid, startNode, endNode);
        visualizePath(dijkstraPath.path, dijkstraPath.visited);
    };

    return (
        <div className='menu-banner'>
            <h1 onClick={reloadPage}>PATHFINDER</h1>
            <button onClick={resetBoard}>Reset Board</button>
            <button onClick={clearBoard}>Clear Board</button>
            <button onClick={visualizeAstar}>Visualize A*</button>
            <button onClick={visualizeBFS}>Visualize BFS</button>
            <button onClick={visualizeDFS}>Visualize DFS</button>
            <button onClick={visualizeDijkstra}>Visualize Dijkstra</button>
        </div>
    );
};

export default Menu;