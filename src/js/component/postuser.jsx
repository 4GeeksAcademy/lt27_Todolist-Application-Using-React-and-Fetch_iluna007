import React, { useState, useEffect } from "react";

export const crearUsuario = (nombredeusuario) => {
    fetch(`https://playground.4geeks.com/todo/users/${usuarionuevo123}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

export const GetData = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        console.log("Obteniendo usuarios");
        fetch('https://playground.4geeks.com/todo/users')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setUsuarios(data.users);
        });
    }, []);
	

    return(
		<div className="text-center mt-5">
			<h1>Leyendo usuarios del API</h1>
            <ul>
                {usuarios.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>  
        </div>
	);
}; 

export default GetData;