import React, { useState, useEffect } from 'react';
import Node from './Node/Node';
import './Pathfind.css';
import aStar from '../algorithms/aStar';

const cols = 25;
const rows = 15;

const NODE_START_ROW = 0;
const NODE_START_COL = 0;
const NODE_END_ROW = rows - 1;
const NODE_END_COL = cols - 1;

const Pathfind = () => {
    const [grid, setGrid] = useState([]);
    const [path, setPath] = useState([]);

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

        const startNode = grid[NODE_START_ROW][NODE_START_COL];
        const endNode = grid[NODE_END_ROW][NODE_END_COL];
        setPath(aStar(startNode, endNode));
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

    //Spot Constructor
    function Spot(i, j) {
        this.x = i;
        this.y = j;
        this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
        this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
        this.g = 0;
        this.f = 0;
        this.h = 0;
        this.neighbours = [];
        this.previous = undefined;
        this.addneighbours = function (grid) {
            let i = this.x;
            let j = this.y;
            if (i > 0) this.neighbours.push(grid[i - 1][j]);
            if (i < rows - 1) this.neighbours.push(grid[i + 1][j]);
            if (j > 0) this.neighbours.push(grid[i][j - 1]);
            if (j < cols - 1) this.neighbours.push(grid[i][j + 1]);
        };
    }

    //Grid with Node
    const gridWithNode = (
        <div>
            {grid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className='row-wrapper'>
                        {row.map((col, colIndex) => {
                            const { isStart, isEnd } = col;
                            return (
                                <Node
                                    key={colIndex}
                                    isStart={isStart}
                                    isEnd={isEnd}
                                    row={rowIndex}
                                    col={colIndex}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );

    console.log(path);
    return (
        <div className='wrapper'>
            <h1>Pathfind Component</h1>
            {gridWithNode}
        </div>
    );
};

export default Pathfind;