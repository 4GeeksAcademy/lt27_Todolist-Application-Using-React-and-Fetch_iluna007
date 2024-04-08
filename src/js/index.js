//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Test from "./component/test.jsx";
import Personajes from "./component/usuarios.jsx";
import Prueba1 from "./component/usuarios.jsx";



//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
