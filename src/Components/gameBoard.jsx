import { useState } from "react";

const initialBoardArray = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard() {

    const [gameBoard, setGameBoard] = useState(initialBoardArray);

    function handleSquareClick(rowIndex, colIndex) {
        setGameBoard((previousBoard) => {
            const updatedBoard = [...previousBoard.map((innerArray) => [...innerArray])];
            if (updatedBoard[rowIndex][colIndex] === 'X') {
                updatedBoard[rowIndex][colIndex] = '';
            } else {
                updatedBoard[rowIndex][colIndex] = 'X';
            }
            return updatedBoard;
        }) 
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