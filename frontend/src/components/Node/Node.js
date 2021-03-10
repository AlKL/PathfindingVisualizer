import React from 'react';
import './Node.css';

const Node = ({ isStart, isEnd, row, col, isWall }) => {
    const classes = isStart ? 'node-start' : isWall ? 'node-wall' : isEnd ? 'node-end' : '';
    return (
        <div id={`${row}-${col}`} className={`node ${classes}`} ></div>
    );
};

export default Node;