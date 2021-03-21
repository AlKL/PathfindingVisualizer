import React from 'react';
import '../styles/Legend.css';

const Legend = () => {


    return (
        <div className='legendWrapper'>
            <div className='legendItem'>Start-Node</div>
            <div className='legendItem'>Target-Node</div>
            <div className='legendItem'>Visited-Nodes</div>
            <div className='legendItem'>Shortest-Path</div>
            <div className='legendItem'>Wall-Nodes</div>
        </div>
    );
};

export default Legend;