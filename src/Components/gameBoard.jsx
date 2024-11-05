import { useState } from "react";

const initialBoardArray = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {

    let gameBoard = initialBoardArray;

    for (const turn of turns) {
        
        const { square, player } = turn;
        
        const { row , col } = square;

        gameBoard[row][col] = player;
    }
    // function handleSquareClick(rowIndex, colIndex) {
    //     setGameBoard((previousBoard) => {
    //         const updatedBoard = [...previousBoard.map((innerArray) => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activeSymbol;
    //         return updatedBoard;
    //     }) 

    //     onSelectSquare();
    // }

    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}