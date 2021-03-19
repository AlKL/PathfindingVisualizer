/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import './Menu.css';
import aStar from '../../algorithms/aStar';
import bfs from '../../algorithms/bfs';
import visualizePath from '../Menu/Visualizer';

const Menu = ({ resetBoard, clearBoard, startNode, endNode }) => {

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

    return (
        <div className='menu-banner'>
            <h1>Pathfinding Visualizer</h1>
            <button onClick={resetBoard}>Reset Board</button>
            <button onClick={clearBoard}>Clear Board</button>
            <button onClick={visualizeAstar}>Visualize A*</button>
            <button onClick={visualizeBFS}>Visualize BFS</button>
        </div>
    );
};

export default Menu;