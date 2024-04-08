import React, {useState} from "react";

//create your first component
const Test = () => {
    const traertareas = () => {
        console.log("Traer tareas");
    }

    const crearusuario = () => {
        console.log("Crear usuario");
    }

    return (
        <div className="text-center">
            <h1 className="text-center mt-5">"Hello this is a test!"</h1>
            <button onClick={traertareas}>traer tareas</button>
            <button onClick={crearusuario}>creando usuarios</button>
        </div>
    );
}

export default Test;
