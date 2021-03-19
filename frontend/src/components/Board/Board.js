/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Board.css';
import Node from '../Node/Node';
import Spot from '../Node/Spot';

const Board = ({ grid, rows, columns, setGrid, setStartNode, setEndNode }) => {
    const [wallState, setWallState] = useState(false);
    const [startState, setStartState] = useState(false);

    useEffect(() => {
        newBoard();
    }, []);

    //newBoard function 
    const newBoard = () => {
        //create grid matrix
        const grid = new Array(rows);
        for (let i = 0; i < rows; i++) {
            grid[i] = new Array(columns);
        }
        setGrid(grid);
        //assign each grid square a new 'Spot'
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                grid[i][j] = new Spot(i, j, rows, columns);
            }
        }
        addNeighbours(grid);
        setStartNode(grid[3][2]);
        setEndNode(grid[3][18]);
    };

    //Spot Constructor - attributes for each node
    // function Spot(i, j) {
    //     this.x = i;
    //     this.y = j;
    //     this.isStart = this.x === 3 && this.y === 2;
    //     this.isEnd = this.x === 3 && this.y === 18;
    //     this.g = 0;
    //     this.f = 0;
    //     this.h = 0;
    //     this.neighbours = [];
    //     this.isWall = false;
    //     // if (Math.random(1) < 0.2) {
    //     //     this.isWall = true;
    //     // }
    //     this.previous = undefined;
    //     this.addneighbours = function (grid) {
    //         let i = this.x;
    //         let j = this.y;
    //         if (i > 0) this.neighbours.push(grid[i - 1][j]);
    //         if (i < rows - 1) this.neighbours.push(grid[i + 1][j]);
    //         if (j > 0) this.neighbours.push(grid[i][j - 1]);
    //         if (j < columns - 1) this.neighbours.push(grid[i][j + 1]);
    //     };

    //     //BFS attributes -> move this into the algorithm
    //     this.d = Infinity;      //node's distance
    //     this.parent = null;     //node's parent
    //     this.color = null;      //node's color
    // }

    const addNeighbours = (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                grid[i][j].addneighbours(grid);
            }
        }
    };

    const setWall = (e) => {
        e.preventDefault();
        var eleArr = idToGridXY(e.target.id);
        var thisClassName = document.getElementById(e.target.id).className;
        if (e.type === 'mousedown' && !thisClassName.includes('node-start') && !thisClassName.includes('node-end')) {
            setWallState(true);
            document.getElementById(`${e.target.id}`).className = 'node node-wall';
            grid[eleArr[0]][eleArr[1]].isWall = true;
        } else if (e.type === 'mouseover' && wallState && !thisClassName.includes('node-start') && !thisClassName.includes('node-end')) {
            document.getElementById(`${e.target.id}`).className = 'node node-wall';
            grid[eleArr[0]][eleArr[1]].isWall = true;
        } else if (e.type === 'mouseup' && wallState) {
            setWallState(false);
            // console.log(grid[eleArr[0]][eleArr[1]]);
        } else if (e.type === 'mousedown' && thisClassName.includes('node-start')) {
            //must set isStart/change start state/change color
            setStartState(true);
            document.getElementById(`${e.target.id}`).className = 'node';
            grid[eleArr[0]][eleArr[1]].isStart = false;
        } else if (e.type === 'mouseover' && startState && !(grid[eleArr[0]][eleArr[1]].isEnd)) {
            if (grid[eleArr[0]][eleArr[1]].isWall) {
                grid[eleArr[0]][eleArr[1]].isWall = false;
            }
            document.getElementById(`${e.target.id}`).className = 'node node-start';
        } else if (e.type === 'mouseleave' && startState && !(grid[eleArr[0]][eleArr[1]].isEnd)) {
            document.getElementById(`${e.target.id}`).className = 'node';
        } else if (e.type === 'mouseup' && startState) {
            setStartState(false);
            grid[eleArr[0]][eleArr[1]].isStart = true;
            setStartNode(grid[eleArr[0]][eleArr[1]]);
        }
    };

    const idToGridXY = (eleIdStr) => {
        var arr = eleIdStr.split(/-/g).slice(0);
        return arr;
    };

    return (
        <div className='board'>
            {grid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className='row-wrapper'>
                        {row.map((col, colIndex) => {
                            const { isStart, isEnd, isWall } = col;
                            return (
                                <Node
                                    setWall={setWall}
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
};

export default Board;