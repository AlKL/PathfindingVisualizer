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
                        <li key={algo.name}
                            className='listButton'
                            onMouseDown={() => initAlgo(algo = { algo })}
                        >
                            {algo.name}
                        </li>
                    ))}
                </ul>
            </div >
        );
    };

    return (
        <div className='dropButton' onBlur={closeDrop}>
            <button onClick={toggleDrop} onBlur={closeDrop}>
                {dropName}
                <div className='arrowContainer'>
                    <img src={arrowDown} />
                </div>
            </button>
            <div>
                {dropOpen ? listToShow() : ''}
            </div>
        </div>
    );
};

export default DropDown;