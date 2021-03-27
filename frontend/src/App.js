/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Board from './components/Board/Board';
import Menu from './components/Menu/Menu';
import Spot from './components/Node/Spot';
import Legend from './components/Legend';
import Footer from './components/Footer';
import './styles/styles.css';

const App = () => {
  const [grid, setGrid] = useState([]);
  const [startNode, setStartNode] = useState(null);
  const [endNode, setEndNode] = useState(null);
  const [message, setMessage] = useState('Select an algorithm to visualize!');
  // const rows = 21;
  // const columns = 41;
  const rows = 29;
  const columns = 61;

  //does not clear walls
  const clearBoard = () => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let x = document.getElementById(`${i}-${j}`).className;
        if (x.includes('node-visited') || x.includes('node-shortest-path')) {
          document.getElementById(`${i}-${j}`).className = 'node';
        }
        // grid[i][j] = null;
        grid[i][j] = new Spot(i, j, rows, columns);
        if (x.includes('node-wall')) {
          // console.log('WALL');
          grid[i][j].isWall = true;
          // console.log(grid[i-1][j].neighbours);
        }
      }
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        grid[i][j].addneighbours(grid);
      }
    }

    grid[10][6].isStart = false;
    grid[10][34].isEnd = false;
    // grid[5][1].isStart = false;
    // grid[5][8].isEnd = false;

    grid[startNode.x][startNode.y].isStart = true;
    grid[endNode.x][endNode.y].isEnd = true;
    setStartNode(grid[startNode.x][startNode.y]);
    setEndNode(grid[endNode.x][endNode.y]);
    // console.log(startNode);
    setMessage('');
  };

  //clears walls
  const resetBoard = () => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let x = document.getElementById(`${i}-${j}`).className;
        if (x.includes('node-visited') || x.includes('node-shortest-path') || x.includes('node-wall')) {
          document.getElementById(`${i}-${j}`).className = 'node';
          if (x.includes('node-wall')) {
            let y = document.getElementById(`${i}-${j}`).id;
            var eleArr = idToGridXY(y);
            grid[eleArr[0]][eleArr[1]].isWall = false;
          }
        }
      }
    }
    setMessage('');
  };

  const idToGridXY = (eleIdStr) => {
    var arr = eleIdStr.split(/-/g).slice(0);
    return arr;
  };

  return (
    <div className='wrapper'>
      <Menu
        grid={grid}
        clearBoard={clearBoard}
        resetBoard={resetBoard}
        startNode={startNode}
        endNode={endNode}
        setMessage={setMessage}
      />
      <Legend />
      <div className='board'>
        <Board
          grid={grid}
          rows={rows}
          columns={columns}
          setGrid={setGrid}
          setStartNode={setStartNode}
          setEndNode={setEndNode}
        />
      </div>
      {/* <div className='message'>
        {message}
      </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;