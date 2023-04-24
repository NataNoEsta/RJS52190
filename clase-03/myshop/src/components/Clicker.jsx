import { useState, useRef, useEffect } from "react";

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
	const fechaActual = new Date();
	const dateRef = useRef(new Date());
	// con useRef el dato no se actualiza con cada renderizado del componente
	// sirve para mantener valores persistentes
	// se utiliza para acceder y modificar elementos del DOM
	if (count % 5 == 0) {
		dateRef.current = new Date();
	}
	// hook useEffect -> sintaxis
	// useEffect((funion), dependencias)
	// las aciones ocurren solo en el montaje del componente
	useEffect(() => {
		dateRef.current = new Date();
		console.log("componente montado dentro de useEffect");
	}, [count]); //-> el efeto se dispara cada vez que se actualiza la dependencia count

	console.log("componente montado - fuera de useEffect");
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
			<p>componente con useRef: {dateRef.current.toLocaleString()}</p>
			<p>componente sin ref: {fechaActual.toLocaleString()}</p>
		</div>
	);
};
