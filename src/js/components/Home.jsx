//Home.jsx: controla el inicio del juego

import React, { useState } from "react";
import Board from "./Board";
import PlayerSetup from "./PlayerSetup";
import GameStatus from "./GameStatus";

// aqui muestro el titulo y el tablero
const Home = () => {
	//tablero y turno
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	//estado del jugador y control de inicio
	const [juegoIniciado, setJuegoIniciado] = useState(false);
	
	const [jugadores, setJugadores] = useState({
		player1: { name: "", symbol: "X" },
		player2: { name: "", symbol: "O" },
	});

	//manejar el formulario
	const handleStartGame = ({ player1, player2 }) => {
		setJugadores({ player1, player2 });
		setJuegoIniciado(true);
		setXIsNext(player1.symbol === "X");
		console.log("Juego iniciado con:", player1, player2);
	};

	// cuando Board nos llama con newSquares:
	const handlePlay = (newSquares) => {
		setSquares(newSquares);     //me ayuda a actualizamos el tablero
		setXIsNext(!xIsNext)       // alternamos X - O
	};

	return (
         //titulo grande
		<div className="text-center">
			<h1 className="text-center mt-5">🐱Tic Tac Toe con React.jsx</h1>
			{/* <h2>Pick a Weapon</h2> */}

			{!juegoIniciado ? (
				<PlayerSetup onStartGame={handleStartGame} />
			) : (
				<>
					<GameStatus squares={squares} xIsNext={xIsNext} jugadores={jugadores} />
					<Board squares={squares} xIsNext={xIsNext} onPlay={handlePlay} />
					<p>

                        {/* aqui indicamos el turno del jugador dependiendo de la casilla que escoja el jugador */}
						<strong>  
							Turno de:{" "}
							{xIsNext
								? `${jugadores.player1.name} (${jugadores.player1.symbol})`
								: `${jugadores.player2.name} (${jugadores.player2.symbol})`}
						</strong>
					</p>
				</>
			)}

			<h4>
				<strong>Made by Jenn with love❤️!</strong>
			</h4>

		</div>

	);
};

export default Home;