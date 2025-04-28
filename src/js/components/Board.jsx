//Board.jsx: es el tablero 3x3

// importar React y useState para poder usar jsx
import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";


const Board = ({ squares, xIsNext, onPlay }) => {
    // al hacer click en índice " i"
    const handleClick = (i) => {
      // "calculateWinner(squares)"si ya hay ganador o casilla ocupada, no hacemos nada
      if (calculateWinner(squares) || squares[i]) return;
  
      // copiamos y actualizamos la casilla i
      const next = squares.slice();   // me va a crear copia del array
      next[i] = xIsNext ? "X" : "O";  // pone X u O
      onPlay(next);  // aqi llamamos a Home.handlePlay
    };
    
    //esta parte me permite hacer click en cada parte, ir marcando la jugada
    return (
      <div className="board">
        {squares.map((val, i) => (
          <Square
            key={i}
            value={val}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>
    );
  };
  
  /** importamos también la función de ganador */
  function calculateWinner(squares) {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];  //aqui compara a de b y a de c para saber si son iguales 
    for (const [a,b,c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  export default Board;