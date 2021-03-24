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

    //reset board then generate your recursive walls
    const visualizeStairWall = async () => {
        await resetBoard();
        const stairWallPath = stairWall(grid);
        visualizeWall(stairWallPath);
        // console.log(wallPath);
    };

    const visualizeRandomWall = async () => {
        await resetBoard();
        const randomWallPath = randomWall(grid);
        visualizeWall(randomWallPath);
        // console.log();
    };

    const visualizeRecursiveWall = async () => {
        await resetBoard();
        const recursiveWallPath = recursiveWall(grid);
        visualizeWall(recursiveWallPath);
        // console.log();
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
            <button onClick={visualizeStairWall}>Stair Walls</button>
            <button onClick={visualizeRandomWall}>Random Walls</button>
            <button onClick={visualizeRecursiveWall}>Recursive Walls</button>
        </div>
    );
};

export default Menu;