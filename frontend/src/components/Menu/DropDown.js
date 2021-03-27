/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../../styles/DropDown.css';
import arrowDown from '../../images/arrow_down.png';

const DropDown = ({ dropName, itemArray }) => {
    const [dropOpen, setDropOpen] = useState(false);

    const toggleDrop = () => setDropOpen(!dropOpen);
    const closeDrop = () => setDropOpen(false);

    const initAlgo = ({ algo }) => {
        algo.vis();
        closeDrop();
    };

    const listToShow = () => {
        return (
            <div>
                <ul>
                    {itemArray.map(algo => (
                        <li key={algo.name} >
                            <button
                                className='listButton'
                                // onClick={() => { algo.vis(); }}
                                onMouseDown={() => initAlgo(algo = { algo })}
                            >
                                {algo.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className='dropButton'>
            <button onClick={toggleDrop} onBlur={closeDrop}>
                {/* <button onClick={toggleDrop} > */}
                {dropName}
                <div className='arrowContainer'>
                    <img src={arrowDown} />
                </div>
            </button>
            {/* {console.log(visualizeE)} */}
            {/* <button onClick={() => visualizeE()}>VIS</button> */}
            <div>
                {dropOpen ? listToShow() : ''}
            </div>
        </div>
    );
};

export default DropDown;