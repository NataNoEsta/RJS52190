import { useState } from "react";
let carrito = [];

export const ButtonAdd = () => {

	let [cantidad, setCantidad] = useState(0);

	const handleAumentar = () => {
		setCantidad(cantidad + 1);
	};
	const handleDisminuir = () => {
		setCantidad(cantidad ? cantidad - 1 : 0);
	};

	function AgregarCarrito() {
		if (cantidad > 0) {
			carrito.push("hola");
		}
		console.log(carrito);
	}

	return (
		<>
			<div className="container flex flex-wrap w-1/2 justify-center">
				<input
					className="border-2 border-black w-10"
					type="button"
					value="-"
					onClick={handleDisminuir}
				/>
				<input
					className="border-t-2 border-b-2 border-black w-12"
					type="text"
					readonly
					value={cantidad}
				/>
				<input
					className="border-2 border-black w-10"
					type="button"
					value="+"
					onClick={handleAumentar}
				/>
				<button
				className="border-2 border-pink-400 ring-2 btn__add"
				onClick={AgregarCarrito}
			>
				Agregar
			</button>
			</div>
		
		</>
	);
};
