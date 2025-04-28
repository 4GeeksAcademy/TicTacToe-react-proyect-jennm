//PlayerSetup.jsx: parte donde colocamos los nombres de los jugadores, se escoge "X" y "O"

//debemos importar React y { useState }
import React, { useState } from "react";

//aqui el jugador colocara su nombre y elijira "X" o "O"
//definir el componente
function PlayerSetup({ onStartGame }) {
    //aqui me guardara el nombre y la eleccion(x,o)
    const [player1Name, setPlayer1Name] = useState("");
    const [player2Name, setPlayer2Name] = useState("");
    const [selectedWeapon, setSelectedWeapon] = useState("X"); //la "X" va por defecto

    //esta funcion se ejecuta cuando se envian los datos 
    const handleSubmit = (e) => {
        e.preventDefault(); // evita que la pagina se recargue

        // esto son los warning para no olvidar agregar los nombres y que no se repitan 
        if (player1Name.trim() === "" || player2Name.trim() === "") {
            alert("Por favor ingresar nombre de ambos jugadores");
            return;
        }

        if (player1Name.trim() === player2Name.trim()) {
            alert("Los nombres de los jugadores deben ser diferentes");
            return;
        }


        // jugador 2 será la ficha contraria
        const weapon2 = selectedWeapon === "X" ? "O" : "X";

        // pasamos los datos al componente padre (Home.jsx)
        onStartGame({
            player1: { name: player1Name, symbol: selectedWeapon },
            player2: { name: player2Name, symbol: selectedWeapon === "X" ? "O" : "X" },
        });
    };

    //aqui retornamos el formulario
    return (
        <div className="player-setup text-center mt-5">
            <h1>⭕¡Bienvenido al Tic Tac Toe!❌</h1>
            <form onSubmit={handleSubmit}>

                {/* input para agregar el nombre del primer jugador */}
                <div className="d-flex justify-content-center gap-3 mb-3 flex-wrap">
                    <input type="text"
                        placeholder="Jugador #1"
                        value={player1Name}
                        onChange={(e) => setPlayer1Name(e.target.value)}
                        className="form-control w-25 input-jugador" />

                    {/* nombre del jugador numero 2 */}
                    <input
                        type="text"
                        placeholder="Jugador #2"
                        value={player2Name}
                        onChange={(e) => setPlayer2Name(e.target.value)}
                        className="form-control w-25 input-jugador"
                    />
                </div>

                {/* aqui para seleccionar "x" o "O" */}
                <div className="mb-3">
                    <h3><strong>🎮Jugador 1 escoge su ficha:</strong></h3>
                    <label className="me-2">
                        <input type="radio"
                            name="weapon"
                            value="X" checked={selectedWeapon === "X"}
                            onChange={() => setSelectedWeapon("x")} />
                        {" "}X
                    </label>

                    <label className="ms-3">
                        <input type="radio"
                            name="weapon"
                            value="O"
                            checked={selectedWeapon === "O"} onChange={() => setSelectedWeapon("O")} />
                        {" "}O
                    </label>
                </div>

                {/* boton azul para iniciar el juego */}
                <button type="submit" className="btn btn-primary">
                    Comenzar el juego!!
                </button>
            </form>
        </div>
    );

};

//lo exportamos para  usarlo en Home
export default PlayerSetup;