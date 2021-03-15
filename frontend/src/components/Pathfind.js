/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Node from './Node/Node';
import './Pathfind.css';
import aStar from '../algorithms/aStar';
import bfs from '../algorithms/bfs';

const cols = 20;
const rows = 9;

const NODE_START_ROW = 4;
const NODE_START_COL = 2;
const NODE_END_ROW = rows - 5;
const NODE_END_COL = cols - 3;

const Pathfind = () => {
    const [grid, setGrid] = useState([]);
    // const [path, setPath] = useState([]);
    // const [visitedNodes, setVisitedNodes] = useState([]);
    const [startNode, setStartNode] = useState(null);
    const [endNode, setEndNode] = useState(null);

    useEffect(() => {
        initializeGrid();
    }, []);

    //Initializes Grid
    const initializeGrid = () => {
        const grid = new Array(rows);

        for (let i = 0; i < rows; i++) {
            grid[i] = new Array(cols);
        }

        createSpot(grid);
        setGrid(grid);
        addNeighbours(grid);

        const tempStartNode = grid[NODE_START_ROW][NODE_START_COL];
        const tempEndNode = grid[NODE_END_ROW][NODE_END_COL];
        // const tempStartNode = grid[8][8];
        // const tempEndNode = grid[1][17];

        tempStartNode.isWall = false;
        // tempStartNode.neighbours[1].isWall = true;
        // tempStartNode.neighbours[2].isWall = true;
        // tempStartNode.neighbours[3].isWall = true;
        tempEndNode.isWall = false;

        setStartNode(tempStartNode);
        setEndNode(tempEndNode);

        // let aStarPath = aStar(tempStartNode, tempEndNode);
        // setPath(aStarPath.path);
        // setVisitedNodes(aStarPath.visitedNodes);

        // if (aStarPath.path.length === 0) {
        //     console.log('RESET: NO PATH');
        //     initializeGrid();
        // }
    };

    //Add Neighbours
    const addNeighbours = (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j].addneighbours(grid);
            }
        }
    };

    //Creates Spot
    const createSpot = (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j] = new Spot(i, j);
            }
        }
    };

    //Spot Constructor - this is for attributes and color
    function Spot(i, j) {
        this.x = i;
        this.y = j;
        this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
        // this.isStart = this.x === 8 && this.y === 8;
        this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
        // this.isEnd = this.x === 1 && this.y === 17;
        this.g = 0;
        this.f = 0;
        this.h = 0;
        this.neighbours = [];

        this.isWall = false;
        // if (Math.random(1) < 0.2) {
        //     this.isWall = true;
        // }
        this.previous = undefined;
        this.addneighbours = function (grid) {
            let i = this.x;
            let j = this.y;
            if (i > 0) this.neighbours.push(grid[i - 1][j]);
            if (i < rows - 1) this.neighbours.push(grid[i + 1][j]);
            if (j > 0) this.neighbours.push(grid[i][j - 1]);
            if (j < cols - 1) this.neighbours.push(grid[i][j + 1]);
        };

        //BFS attributes
        this.d = Infinity;      //node's distance
        this.parent = null;     //node's parent
        this.color = null;      //node's color
    }

    //Grid with Node
    const gridWithNode = (
        <div>
            {grid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className='row-wrapper'>
                        {row.map((col, colIndex) => {
                            const { isStart, isEnd, isWall } = col;
                            return (
                                <Node
                                    key={colIndex}
                                    isStart={isStart}
                                    isEnd={isEnd}
                                    row={rowIndex}
                                    col={colIndex}
                                    isWall={isWall}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );

    // const visualizeShortestPath = (shortestPathNodes) => {
    //     console.log(shortestPathNodes);
    //     for (let i = 0; i < shortestPathNodes.length; i++) {
    //         setTimeout(() => {
    //             const node = shortestPathNodes[i];
    //             console.log(node);
    //             document.getElementById(`${node.x}-${node.y}`).className = 'node node-shortest-path';
    //         }, 10 * i);
    //     }
    // };

    const visualizeShortestPath = (shortestPathNodes) => {
        const reversed = shortestPathNodes.reverse();
        for (let k = shortestPathNodes.length - 1; k >= 0; k--) {
            setTimeout(() => {
                // console.log(k);
                const node = reversed[k];
                document.getElementById(`${node.x}-${node.y}`).className = 'node node-shortest-path';
            }, 50 * k);
        }
    };

    const visualizePath = (aStarPath, visitedNodes) => {
        for (let i = 0; i <= visitedNodes.length; i++) {
            if (i === visitedNodes.length) {
                setTimeout(() => {
                    visualizeShortestPath(aStarPath);
                }, 50 * i);
            } else {
                setTimeout(() => {
                    const node = visitedNodes[i];
                    document.getElementById(`${node.x}-${node.y}`).className = 'node node-visited';
                }, 50 * i);
            }
        }
    };

    const clearBoard = () => {
        // console.log('Clear Board Test');
        initializeGrid();
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let x = document.getElementById(`${i}-${j}`).className;
                // if (x.includes('node-wall')) {
                grid[i][j].isWall = false;
                // }
                document.getElementById(`${i}-${j}`).className = 'node';
            }
        }
        document.getElementById(`${NODE_START_ROW}-${NODE_START_COL}`).className = 'node node-start';
        document.getElementById(`${NODE_END_ROW}-${NODE_END_COL}`).className = 'node node-end';
        console.log(startNode);
    };

    const visualizeAstar = () => {
        console.log('Visualizing A *');
        // console.log(endNode);
        const aStarPath = aStar(startNode, endNode);
        visualizePath(aStarPath.path, aStarPath.visitedNodes);
    };

    const visualizeBfs = () => {
        console.log('Visualizing BFS');
        // console.log(startNode.neighbours);
        const bfsPath = bfs(startNode, endNode);
        visualizePath(bfsPath.path, bfsPath.visitedNodes);
    };

    var currentElement = null;
    var mouseDown = 0;
    var startDown = 0;
    var endDown = 0;

    //if the element is start, move the element
    //if the element is just a node, set a wall
    document.body.onmousedown = (e) => {
        e.preventDefault();

        //checks if current div has ID (is within the grid)
        if (e.target.id) {
            ++mouseDown;
            //if on grid, x is the class of the node
            var x = document.getElementById(`${e.target.id}`).className;
            //if startNode, should be draggable
            if (x.includes('node-start')) {
                // console.log('start node');
                // console.log(`START-DOWN: ${startDown}`);
                document.getElementById(`${e.target.id}`).className = 'node';
                ++startDown;
            } else if (x.includes('node-end')) {
                document.getElementById(`${e.target.id}`).className = 'node';
                ++endDown;
            } else if (x.includes('node')) {
                setWall(e.target);
            }
        }
    };
    document.body.onmouseup = (e) => {
        e.preventDefault();
        if (e.target.id) {
            --mouseDown;
        }
        // console.log(mouseDown);
        if (startDown) {
            --startDown;
            // console.log(`START-DOWN: ${startDown}`);
            // console.log(startNode);
            //set the initial start point to a regular node
            document.getElementById(`${startNode.x}-${startNode.y}`).className = 'node';
            // if (e.target.id) {
            //set the current spot to be the start node
            var eleArr = idToGridXY(e.target.id);
            setStartNode(grid[eleArr[0]][eleArr[1]]);
            //style the current spot to be node-start
            document.getElementById(`${e.target.id}`).className = 'node node-start';
            // }
            console.log(startNode);
        }
        if (endDown) {
            --endDown;
            document.getElementById(`${endNode.x}-${endNode.y}`).className = 'node';
            var eleEndArr = idToGridXY(e.target.id);
            setEndNode(grid[eleEndArr[0]][eleEndArr[1]]);
            document.getElementById(`${e.target.id}`).className = 'node node-end';
        }
    };
    document.body.onmouseover = (e) => {
        e.preventDefault();
        currentElement = e.target;
        if (mouseDown && !startDown && !endDown) {
            // console.log(mouseDown);
            setWall(currentElement);
        }
        // else if (mouseDown && startDown) {
        //     // // moveStart(currentElement);
        //     if (e.target.id) {
        //         if (mouseDown) {
        //             // document.getElementById(`${e.target.id}`).className = 'node node2';
        //         }
        //     }
        // }
    };

    const setWall = (ele) => {
        var notStartEnd = document.getElementById(`${ele.id}`).className;
        if (ele.id) {
            if (!notStartEnd.includes('node-start') && !notStartEnd.includes('node-end')) {
                var eleArr = idToGridXY(ele.id);
                document.getElementById(`${ele.id}`).className = 'node node-wall';
                if (grid.length > 0) {
                    grid[eleArr[0]][eleArr[1]].isWall = true;
                }
            }
        }
    };

    const idToGridXY = (eleIdStr) => {
        var arr = eleIdStr.split(/-/g).slice(0);
        return arr;
    };

    // console.log(path);
    return (
        <div className='wrapper'>
            <button onClick={clearBoard} >Reset Board</button>
            <button onClick={visualizeAstar}>Visualize A*</button>
            <button onClick={visualizeBfs}>Visualize BFS</button>
            <h1>Pathfind Component</h1>
            {gridWithNode}
        </div>
    );
};

export default Pathfind;