//Square.jsx: representa solouna casilla de la cuadricula

// importar React
import React from "react";
import "./Square.css";

//aqui square recibira dos cosas de Board cuando de click un "value" o "onclick"
const Square = ({ value, onClick }) =>{
    return(
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};

export default Square; //aqui exportamos Square para usarlo en Board