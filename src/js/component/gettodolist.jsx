import React, { useState, useEffect } from "react";

const GetTodolist = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        console.log("Obteniendo lista de usuarios");
        fetch('https://playground.4geeks.com/todo/users/usuariodeprueba666')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.todos);
            setList(data.todos);
        });
    }, [])
    
    return(
        <div className="text-center mt-5">
            <h1>Trayendo lista de usuario </h1>
            <h1>
                 {list.map((item, index) => (
                    <p key={index}>{item.label}</p>
                ))}
            </h1>             
        </div>
    );
}; 

export default GetTodolist;