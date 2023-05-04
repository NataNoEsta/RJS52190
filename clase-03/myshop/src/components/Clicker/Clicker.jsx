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
			<button onClick={counter} className="rounded-full bg-slate-500 border-1 px-4 py-1">Click me!</button>
			<p>contador = {count} </p>
		</div>
	);
};
