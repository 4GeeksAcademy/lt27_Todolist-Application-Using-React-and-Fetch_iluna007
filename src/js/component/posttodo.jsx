import React, { useState } from "react";

const PostNewTask = () => {

    const [newtask, setNewTask] = useState("");

    function crearTarea() {
        fetch(`https://playground.4geeks.com/todo/todos/${user_name}`, {
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: JSON.stringify({
                "label": "Actividad 2",
                "is_done": false
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
                    <input type="text" value={newtask} onChange={(e) => setNewTask(e.target.value)} />
                    <button className="btn btn-success" onClick={crearTarea}>Crear tarea</button>
                </li>
            </ul>
        </div>
    );
	
}; 

export default PostNewTask;
