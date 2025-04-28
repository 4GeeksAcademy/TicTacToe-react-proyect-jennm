//GameStatus.jsx: me indica de quien es el turno y quien gano

import React from "react";

//aqui va a calcular al ganador con "calculateWinner"
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (const [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

//mostrara mensaje dependiendo de la jugada
const GameStatus = ({ squares, xIsNext, jugadores }) => {
    const winner = calculateWinner(squares);

    let status;

    if (winner) {
        // mostraremos el nombre del ganador segun su simbolo
        const jugadorGanador = winner === jugadores.player1.symbol
            ? jugadores.player1.name
            : jugadores.player2.name;
        //aqui indicamos el mensaje si hay ganador y el nombre
        status = `🎉¡Ganador ${jugadorGanador}! 🎉`;
    } else {
        status = `Turno de: ${xIsNext
            ? jugadores.player1.name
            : jugadores.player2.name
            }`;
    }
    //Esta parte me retornara el mensaje del ganador
    return <div className="status mb-3"><h1>{status}</h1></div>;

};

export default GameStatus; 