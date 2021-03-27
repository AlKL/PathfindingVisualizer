import React from 'react';
import '../styles/Legend.css';
import Node from '../components/Node/Node';

const Legend = () => {


    return (
        <div className='legendWrapper'>
            <div className='legendItem'>
                <Node isStart={true} />
                <span>Start-Node</span>
            </div>
            <div className='legendItem'>
                <Node isEnd={true} />
                <span>Target-Node</span>
            </div>
            <div className='legendItem'>
                <div className='visited'></div>
                <span>Visited-Nodes</span>
            </div>
            <div className='legendItem'>
                <div className='shortest'></div>
                <span>Shortest-Path</span>
            </div>
            <div className='legendItem'>
                <Node isWall={true} />
                <span>Wall-Node</span>
            </div>
        </div>
    );
};

export default Legend;