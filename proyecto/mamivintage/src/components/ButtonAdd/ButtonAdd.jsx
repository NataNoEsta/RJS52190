import { useRef, useState } from "react";
import "./ButtonAdd.scss";

// la prop "agregar" se pasa al botón para como referencia de la funcion "handleAdd"
export const ButtonAdd = ({ cantidad, setCantidad, stock, agregar }) => {
	// let [cantidad, setCantidad] = useState(1);
	// const cantidadRef = useRef(0)

	const handleAumentar = () => {
		cantidad < stock && setCantidad(cantidad + 1);
	};
	const handleDisminuir = () => {
		setCantidad(cantidad > 1 ? cantidad - 1 : 1);
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
					className={
						cantidad === 1
							? "border-2 w-10 justify-center btn-disabled"
							: "border-2 w-10 justify-center"
					}
					type="button"
					disabled={cantidad === 1}
					value="-"
					onClick={handleDisminuir}
				/>
				<span className="border-pink-300 px-4 pt-2 text-center">{cantidad}</span>
				<input
					className={
						cantidad === stock
							? "border-2 w-10 justify-center btn-disabled"
							: "border-2 w-10 justify-center"
					}
					type="button"
					disabled={cantidad === stock}
					value="+"
					onClick={handleAumentar}
				/>
				<button
					className="btn__add w-fit"
					onClick={agregar}>
					Agregar
				</button>
			</div>
		</>
	);
};
