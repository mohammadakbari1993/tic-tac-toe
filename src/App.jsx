import Player from "./Components/player"
import GameBoard from "./Components/gameBoard"
import { useState } from "react"
function App() {
  
  const [activePlayer, setActivePlayer] = useState('X');
  
  function handleSettingTheActivePlayer() {
    setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName = "player 1" symbol= "X" isActive = {activePlayer === 'X'}/>
          <Player initialName = "player 2" symbol= "O" isActive = {activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSettingTheActivePlayer} activeSymbol={activePlayer}/>
      </div>
    </main>
  )
}

export default App
