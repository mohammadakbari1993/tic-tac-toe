import Player from "./Components/player"
import GameBoard from "./Components/gameBoard"
import Log from "./Components/log.jsx"
import { useState } from "react"

function driveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  
  let activePlayer  = driveActivePlayer(gameTurns);
  
  function handleSettingTheActivePlayer(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer = driveActivePlayer(prevTurns);
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [{square : {row: rowIndex, col: colIndex} , player : currentPlayer}, ...prevTurns];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName = "player 1" symbol= "X" isActive = {activePlayer === 'X'}/>
          <Player initialName = "player 2" symbol= "O" isActive = {activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSettingTheActivePlayer} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns} />
    </main>
  )

}

export default App
