/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import './Menu.css';
import aStar from '../../algorithms/aStar';
import visualizePath from '../Menu/Visualizer';

const Menu = ({ resetBoard, clearBoard, startNode, endNode }) => {

    const visualizeAstar = () => {
        clearBoard();
        const aStarPath = aStar(startNode, endNode);
        visualizePath(aStarPath.path, aStarPath.visitedNodes);
    };

    return (
        <div className='menu-banner'>
            <h1>Pathfinding Visualizer</h1>
            <button onClick={resetBoard}>Reset Board</button>
            <button onClick={clearBoard}>Clear Board</button>
            <button onClick={visualizeAstar}>Visualize A*</button>
        </div>
    );
};

export default Menu;