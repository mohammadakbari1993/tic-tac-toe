import { useState } from "react"

export default function Player({initialName, symbol}) {
  
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
   
    function handleInputChange(event) {
        setPlayerName(event.target.value);
    }
   
    function updateIsEditing() {
        setIsEditing((editing)=>!editing);
    }
    
    let playerEditableName = <span className="player-name"> {playerName} </span>;
    let buttonTitle = "Edit";
    
    if (isEditing) {
        playerEditableName = <input type="text" required value={playerName} onChange={handleInputChange}/>
        buttonTitle="Save"
    } else {
        buttonTitle="Edit"
    }

    return <>
             <span className="player">
              {playerEditableName}
              <span className="player-symbol"> {symbol} </span>
            </span>
            <button onClick={updateIsEditing}>{buttonTitle}</button>
    </>
}