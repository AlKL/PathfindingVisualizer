/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import '../../styles/Menu.css';
// import aStar from '../../algorithms/aStar';
import aStar from '../../algorithms/aStar2';
import bfs from '../../algorithms/bfs';
import dfs from '../../algorithms/dfs';
import dijkstra from '../../algorithms/dijkstra';
import visualizePath from '../Menu/Visualizer';
import visualizeWall from '../Menu/VisualizeWall';
import recursiveWall from '../../wallAlgos/recursiveWall';
import stairWall from '../../wallAlgos/stairWall';
import randomWall from '../../wallAlgos/randomWall';

import DropDown from './DropDown';

const Menu = ({ grid, resetBoard, clearBoard, startNode, endNode, setMessage }) => {
    const reloadPage = () => {
        window.location.reload();
    };

    const visualizeAstar = async () => {
        await clearBoard();
        setMessage('Visualizing A*');
        const aStarPath = aStar(startNode, endNode);
        visualizePath(aStarPath.path, aStarPath.visitedNodes);
    };

    const visualizeBFS = async () => {
        await clearBoard();
        setMessage('Visualizing Breadth-First Search');
        const bfsPath = bfs(startNode, endNode);
        visualizePath(bfsPath.path, bfsPath.visitedNodes);
    };

    const visualizeDFS = async () => {
        await clearBoard();
        setMessage('Visualizing Depth-First Search');
        const dfsPath = dfs(startNode, endNode);
        visualizePath(dfsPath.path, dfsPath.visitedNodes);
    };

    const visualizeDijkstra = async () => {
        await clearBoard();
        setMessage('Visualizing Dijkstra\'s Algorithm');
        const dijkstraPath = dijkstra(grid, startNode, endNode);
        visualizePath(dijkstraPath.path, dijkstraPath.visited);
    };

    //reset board then generate your recursive walls
    const visualizeStairWall = async () => {
        await resetBoard();
        setMessage('Initializing Stair Walls');
        const stairWallPath = stairWall(grid);
        visualizeWall(stairWallPath);
        // console.log(wallPath);
    };

    const visualizeRandomWall = async () => {
        await resetBoard();
        setMessage('Initializing Random Walls');
        const randomWallPath = randomWall(grid);
        visualizeWall(randomWallPath);
    };

    const visualizeRecursiveWall = async () => {
        await resetBoard();
        setMessage('Initializing Recursive Walls');
        const recursiveWallPath = recursiveWall(grid, 'widthHeightBased');
        visualizeWall(recursiveWallPath);
    };

    const visualizeRecursiveWallHorizontal = async () => {
        await resetBoard();
        setMessage('Initializing Recursive Walls');
        const recursiveWallPath = recursiveWall(grid, 'horizontalBased');
        visualizeWall(recursiveWallPath);
    };

    const visualizeRecursiveWallVertical = async () => {
        await resetBoard();
        setMessage('Initializing Recursive Walls');
        const recursiveWallPath = recursiveWall(grid, 'verticalBased');
        visualizeWall(recursiveWallPath);
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
            name: 'Stair Walls',
            vis: visualizeStairWall
        },
        {
            name: 'Random Walls',
            vis: visualizeRandomWall
        },
    ];

    return (
        <div className='menu-banner'>
            <h1 onClick={reloadPage}>PATHFINDER</h1>
            <DropDown
                dropName='Search Algorithms'
                itemArray={algoArray}
            />
            <DropDown
                dropName='Maze Algorithms'
                itemArray={mazeArray}
            />
            <button onClick={resetBoard}>Reset Board</button>
            <button onClick={clearBoard}>Clear Board [Keep Walls]</button>
        </div>
    );
};

export default Menu;