import { useRef, useState } from "react";
import './ButtonAdd.scss'

// la prop "agregar" se pasa al botón para como referencia de la funcion "handleAdd"
export const ButtonAdd = ({cantidad, setCantidad, stock, agregar}) => {
	// let [cantidad, setCantidad] = useState(1);
	// const cantidadRef = useRef(0)
	
	const handleAumentar = () => {
		cantidad < stock && setCantidad(cantidad + 1);
	};
	const handleDisminuir = () => {
		setCantidad(cantidad ? cantidad - 1 : 1);
	};

	// const agregarCarrito = () => {

	// 	console.log({
	// 		...item,
	// 		cantidad
	// 	})
	// }
	return (
		<>
			<div className="container inline-flex flex-wrap">
				<input
					className="border-2 w-10 justify-center"
					type="button"
					value="-"
					onClick={handleDisminuir}
				/>
				<input
					className="border-t-2 border-b-2"
					type="text"
					readOnly
					onChange={handleAumentar || handleDisminuir} value={cantidad}
				/>
				<input
					className="border-2 w-10 justify-center"
					type="button"
					value="+"
					onClick={handleAumentar}
				/>
				<button
				className="btn__add w-fit" onClick={agregar}
			>
				Agregar
			</button>
			</div>
		
		</>
	);
};
