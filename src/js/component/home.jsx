import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import GetTodolist from "./gettodolist.jsx";
import PostNewUser from "./postnewuser.jsx";
import PostNewTask from "./posttodo.jsx";

//create your first component

const Home = () => {

	const [confirmuser, setConfirmUser] = useState("");
	const user = (user) => {
		setConfirmUser(user);
	}


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>

			<PostNewUser confirmuser = {user}/>
			<PostNewTask confirmuser = {confirmuser}/>
			<GetTodolist confirmuser = {confirmuser}/>

		</div>
	);
};

export default Home;
