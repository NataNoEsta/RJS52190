import { useEffect, useRef, useState } from "react";
import './ButtonAdd.scss'

export const ButtonAdd = () => {

	let [cantidad, setCantidad] = useState(0);
	console.log(cantidad)

	const handleAumentar = () => {
		setCantidad(cantidad + 1);
	};
	const handleDisminuir = () => {
		setCantidad(cantidad ? cantidad - 1 : 0);
	};

	return (
		<>
			<div className="container inline-flex flex-wrap">
				<input
					className="border-2 border-black w-10 justify-center"
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
					className="border-2 border-black w-10 justify-center"
					type="button"
					value="+"
					onClick={handleAumentar}
				/>
				<button
				className="hover:ring-2 btn__add "
			>
				Agregar
			</button>
			</div>
		
		</>
	);
};
