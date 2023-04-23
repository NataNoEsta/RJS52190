import { useState } from "react";
import { Button } from "react-bootstrap";

export const Clicker = () => {
	// count -> estado / variable
	// setCount -> funcion que modifica el valor del estado
	const [count, setCount] = useState(0);
	const [saludo, setSaludo] = useState("Hola...");

	const counter = () => {
		// setCount actualiza el valor del estado count
		setCount(count + 1);
		console.log(count);
	};

	const agregarSaludo = () => {
		setSaludo(saludo + " Boluda!");
	};
	return (
		//estado del componenete // debe regenerarse la vista del comp
		<div className="container px-12 m-2">
			<Button variant="primary" onClick={counter}>
				Contador!
			</Button>
			<p className="mx-1">contador = {count} </p>
			{/* <p className="mx-1" onMouseEnter={agregarSaludo}>
				{saludo}
			</p> */}
		</div>
	);
};
