import React, { useEffect, useState } from 'react';
import '../../styles/Board.css';
import Node from '../Node/Node';
import Spot from '../Node/Spot';

const Board = ({ grid, rows, columns, setGrid, setStartNode, setEndNode }) => {
    const [wallState, setWallState] = useState(false);
    const [startState, setStartState] = useState(false);
    const [endState, setEndState] = useState(false);

    useEffect(() => {
        newBoard();
    }, []);

    const newBoard = () => {
        const grid = new Array(rows);
        for (let i = 0; i < rows; i++) {
            grid[i] = new Array(columns);
        }
        setGrid(grid);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                grid[i][j] = new Spot(i, j, rows, columns);
            }
        }
        addNeighbours(grid);
        setStartNode(grid[14][10]);
        setEndNode(grid[14][50]);
    };

    const addNeighbours = (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                grid[i][j].addneighbours(grid);
            }
        }
    };

    const setWall = (e) => {
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
        }

        else if (e.type === 'mousedown' && thisClassName.includes('node-start')) {
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

        else if (e.type === 'mousedown' && thisClassName.includes('node-end')) {
            setEndState(true);
            document.getElementById(`${e.target.id}`).className = 'node';
            grid[eleArr[0]][eleArr[1]].isEnd = false;
        } else if (e.type === 'mouseover' && endState && !(grid[eleArr[0]][eleArr[1]].isStart)) {
            if (grid[eleArr[0]][eleArr[1]].isWall) {
                grid[eleArr[0]][eleArr[1]].isWall = false;
            }
            document.getElementById(`${e.target.id}`).className = 'node node-end';
        } else if (e.type === 'mouseleave' && endState && !(grid[eleArr[0]][eleArr[1]].isStart)) {
            document.getElementById(`${e.target.id}`).className = 'node';
        } else if (e.type === 'mouseup' && endState) {
            setEndState(false);
            grid[eleArr[0]][eleArr[1]].isEnd = true;
            setEndNode(grid[eleArr[0]][eleArr[1]]);
        }
    };

    const idToGridXY = (eleIdStr) => {
        var arr = eleIdStr.split(/-/g).slice(0);
        return arr;
    };

    return (
        <div className='boardWrapper'>
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