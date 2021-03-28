/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../../styles/DropDown.css';
import arrowDown from '../../images/arrow_down.png';

const DropDown = ({ initialSpeed, setVisSpeed }) => {
    const [dropOpen, setDropOpen] = useState(false);
    const toggleDrop = () => setDropOpen(!dropOpen);
    const closeDrop = () => setDropOpen(false);


    const listToShow = () => {
        return (
            <div>
                <ul>
                    <li className='listButton' onMouseDown={() => setVisSpeed('Fast')}>
                        Fast
                    </li>
                    <li className='listButton' onMouseDown={() => setVisSpeed('Medium')}>
                        Medium
                    </li>
                    <li className='listButton' onMouseDown={() => setVisSpeed('Slow')}>
                        Slow
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <div className='dropButton' onBlur={closeDrop}>
            <button onClick={toggleDrop} onBlur={closeDrop}>
                Speed: {initialSpeed}
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