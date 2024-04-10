import React, { useState } from "react";

const PostNewUser = ({ userCreated }) => {
  const [newuser, setNewUser] = useState("");

  function crearUsuario() {
    fetch(`https://playground.4geeks.com/todo/users/${newuser}`, {
      method: "POST",
      mode: "cors",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        userCreated(newuser);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="container">
      <ul className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <li className="list-group-item opacity-50">
          <input
            type="text"
            value={newuser}
            onChange={(e) => setNewUser(e.target.value)}
          />
          <button className="btn btn-success" onClick={crearUsuario}>
            Crear usuario
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PostNewUser;
