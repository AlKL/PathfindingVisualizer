import React from 'react';
import '../../styles/Node.css';

export const Node = ({ setWall, isStart, isEnd, row, col, isWall }) => {
    const classes = isStart ? 'node-start' : isWall ? 'node-wall' : isEnd ? 'node-end' : '';

    return (
        <div
            onMouseLeave={setWall}
            onMouseDown={setWall}
            onMouseOver={setWall}
            onMouseUp={setWall}
            id={`${row}-${col}`}
            className={`node ${classes}`}
        />
    );
};

export default Node;