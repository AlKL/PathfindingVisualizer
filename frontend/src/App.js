/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// import Pathfind from './components/Pathfind';

// const App = () => {
//   return (
//     <div>
//       <Pathfind />
//     </div>
//   );
// };

// export default App;

//-------------------------------------------------------------------
import Board from './components/Board/Board';
import Menu from './components/Menu/Menu';

const App = () => {
  const [grid, setGrid] = useState([]);
  const [startNode, setStartNode] = useState(null);
  const [endNode, setEndNode] = useState(null);
  const rows = 7;
  const columns = 62;

  //does not clear walls
  const clearBoard = () => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let x = document.getElementById(`${i}-${j}`).className;
        if (x.includes('node-visited') || x.includes('node-shortest-path')) {
          document.getElementById(`${i}-${j}`).className = 'node';
        }
      }
    }
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
  };

  const idToGridXY = (eleIdStr) => {
    var arr = eleIdStr.split(/-/g).slice(0);
    return arr;
  };

  return (
    <div>
      <Menu
        clearBoard={clearBoard}
        resetBoard={resetBoard}
        startNode={startNode}
        endNode={endNode}
      />
      <Board
        grid={grid}
        rows={rows}
        columns={columns}
        setGrid={setGrid}
        setStartNode={setStartNode}
        setEndNode={setEndNode}
      />
    </div>
  );
};

export default App;