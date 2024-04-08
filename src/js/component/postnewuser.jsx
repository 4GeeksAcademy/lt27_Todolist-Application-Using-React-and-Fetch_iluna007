import React, { useState } from "react";

const PostNewUser = () => {

    const [newuser, setNewUser] = useState("");

    function crearUsuario() {
        fetch(`https://playground.4geeks.com/todo/users/${newuser}`, {
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: JSON.stringify({
                // Aquí debes poner los datos que quieres enviar en el cuerpo de la solicitud
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return(
        <div className="container">
            <ul className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <li className="list-group-item opacity-50">
                    <input type="text"/>
                    <button className="btn" onClick={crearUsuario} value={newuser} > Crear usuario</button>
                </li>
            </ul>
        </div>
    );
	
}; 

export default PostNewUser;
