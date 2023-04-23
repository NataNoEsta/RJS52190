import { useState } from "react";

export const Clicker = () => {
	// count -> estado / variable
	// setCount -> funcion que modifica el valor del estado
	const [count, setCount] = useState(0);

	const counter = () => {
		// setCount actualiza el valor del estado count
		setCount(count + 1);
		console.log(count);
	};
	return (
		//estado del componenete // debe regenerarse la vista del comp
		<div>
			<button onClick={counter}>Click me!</button>
			<p>contador = {count} </p>
		</div>
	);
};
