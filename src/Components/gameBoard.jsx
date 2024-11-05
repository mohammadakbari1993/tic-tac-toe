import { useState } from "react";

const initialBoardArray = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onSelectSquare, activeSymbol}) {

    const [gameBoard, setGameBoard] = useState(initialBoardArray);

    function handleSquareClick(rowIndex, colIndex) {
        setGameBoard((previousBoard) => {
            const updatedBoard = [...previousBoard.map((innerArray) => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activeSymbol;
            return updatedBoard;
        }) 

        onSelectSquare();
    }

    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSquareClick(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}