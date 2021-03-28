/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
import React, { useState } from 'react';
import '../../styles/Menu.css';
import aStar from '../../algorithms/aStar';
import greedyBfs from '../../algorithms/greedyBfs';
import bfs from '../../algorithms/bfs';
import dfs from '../../algorithms/dfs';
import dijkstra from '../../algorithms/dijkstra';
import visualizePath from '../Menu/Visualizer';
import visualizeWall from '../Menu/VisualizeWall';
import recursiveWall from '../../wallAlgos/recursiveWall';
import stairWall from '../../wallAlgos/stairWall';
import randomWall from '../../wallAlgos/randomWall';

import DropDown from './DropDown';
import DropDownSpeed from './DropDownSpeed';


const Menu = ({ grid, resetBoard, clearBoard, startNode, endNode, setMessage }) => {
    const [visSpeed, setVisSpeed] = useState('Fast');

    const reloadPage = () => {
        window.location.reload();
    };

    const visualizeAstar = async () => {
        await clearBoard();
        setMessage('Visualizing A*');
        const aStarPath = aStar(startNode, endNode);
        visualizePath(aStarPath.path, aStarPath.visitedNodes, visSpeed);
    };

    const visualizeBFS = async () => {
        await clearBoard();
        setMessage('Visualizing Breadth-First Search');
        const bfsPath = bfs(startNode, endNode);
        visualizePath(bfsPath.path, bfsPath.visitedNodes, visSpeed);
    };

    const visualizeDFS = async () => {
        await clearBoard();
        setMessage('Visualizing Depth-First Search');
        const dfsPath = dfs(startNode, endNode);
        visualizePath(dfsPath.path, dfsPath.visitedNodes, visSpeed);
    };

    const visualizeDijkstra = async () => {
        await clearBoard();
        setMessage('Visualizing Dijkstra\'s Algorithm');
        const dijkstraPath = dijkstra(grid, startNode, endNode);
        visualizePath(dijkstraPath.path, dijkstraPath.visited, visSpeed);
    };

    //reset board then generate your recursive walls
    const visualizeStairWall = async () => {
        await resetBoard();
        setMessage('Initializing Stair Walls');
        const stairWallPath = stairWall(grid);
        visualizeWall(stairWallPath, visSpeed);
        // console.log(wallPath);
    };

    const visualizeRandomWall = async () => {
        await resetBoard();
        setMessage('Initializing Random Walls');
        const randomWallPath = randomWall(grid);
        visualizeWall(randomWallPath, visSpeed);
    };

    const visualizeRecursiveWall = async () => {
        await resetBoard();
        setMessage('Initializing Recursive Walls');
        const recursiveWallPath = recursiveWall(grid, 'widthHeightBased');
        visualizeWall(recursiveWallPath, visSpeed);
    };

    const visualizeRecursiveWallHorizontal = async () => {
        await resetBoard();
        setMessage('Initializing Recursive Walls');
        const recursiveWallPath = recursiveWall(grid, 'horizontalBased');
        visualizeWall(recursiveWallPath, visSpeed);
    };

    const visualizeRecursiveWallVertical = async () => {
        await resetBoard();
        setMessage('Initializing Recursive Walls');
        const recursiveWallPath = recursiveWall(grid, 'verticalBased');
        visualizeWall(recursiveWallPath, visSpeed);
    };

    const algoArray = [
        {
            name: 'A* Search',
            vis: visualizeAstar
        },
        {
            name: 'Dijkstra\'s Algorithm',
            vis: visualizeDijkstra
        },
        {
            name: 'Breadth-First Search',
            vis: visualizeBFS
        },
        {
            name: 'Depth-First Search',
            vis: visualizeDFS
        }
    ];

    const mazeArray = [
        {
            name: 'Recursive Walls',
            vis: visualizeRecursiveWall
        },
        {
            name: 'Recursive Walls [Horizontal Skew]',
            vis: visualizeRecursiveWallHorizontal
        },
        {
            name: 'Recursive Walls [Vertical Skew]',
            vis: visualizeRecursiveWallVertical
        },
        {
            name: 'Basic Stair Walls',
            vis: visualizeStairWall
        },
        {
            name: 'Random Walls',
            vis: visualizeRandomWall
        },
    ];

    const speedArray = [
        {
            name: 'Fast',
            vis: setVisSpeed
        },
        {
            name: 'Medium',
            vis: setVisSpeed
        },
        {
            name: 'Slow',
            vis: setVisSpeed
        }
    ];


    const visualizeGreedyBfs = async () => {
        await clearBoard();
        const greedyBfsPath = greedyBfs(startNode, endNode);
        // visualizePath(greedyBfsPath.path, greedyBfsPath.visitedNodes, visSpeed);
    };

    return (
        <div className='menu-banner'>
            <h1 onClick={reloadPage}>PATHFINDER</h1>
            <DropDown
                dropName='Algorithms'
                itemArray={algoArray}
            />
            <DropDown
                dropName='Wall Patterns'
                itemArray={mazeArray}
            />

            <button onClick={resetBoard}>Reset Board</button>
            <button onClick={clearBoard}>Clear Board [Keep Walls]</button>

            <DropDownSpeed
                initialSpeed={visSpeed}
                setVisSpeed={setVisSpeed}
            />

            <button onClick={visualizeGreedyBfs}>Greedy Best-First Search</button>
        </div>
    );
};

export default Menu;