import React, { useEffect, useState } from "react";

//create your first component
const Prueba1 = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState([]);

    function getUsuarios () {
        console.log("Obteniendo usuarios");
        fetch('https://playground.4geeks.com/todo/users')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.users);
            setUsuarios(data.users);
        });
    }

    useEffect(()=>{
        getUsuarios()
    }
    ,[]) 
    
    function getUsuario () {
        console.log("Obteniendo un usuario");
        fetch('https://playground.4geeks.com/todo/users/il007')
        .then((response1) => response1.json())
        .then((data1) => {
            console.log(data1.todos);
            setUsuario(data1.todos);
        });
    } 
    useEffect(()=>{
        getUsuario()
    }
    ,[]) 

    function agregarTodo () {
        console.log("Agregando un todo");
        fetch('https://playground.4geeks.com/todos/user/il007', {
            method: 'POST',
            body: JSON.stringify([]),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
   

    return (
        <>
            <div className="text-center">
                <h1 className="text-center mt-5">Usuarios</h1>
                {usuarios.map((usuarios, index) => (
                <h2 key={usuarios.id}> {index} {usuarios.name}</h2>
                ))}
            </div>

            <div className="text-center">
            <h1 className="text-center mt-5">todos</h1>
            {usuario.map((list) => (
            <h2 key={list.id}>Label: {list.label}, ID: {list.id}, Is Done: {list.is_done.toString()} </h2>
            ))}
            </div>
            <button onClick={agregarTodo}>Agregar Todo</button>           
        </>
        
    );
}

export default Prueba1;