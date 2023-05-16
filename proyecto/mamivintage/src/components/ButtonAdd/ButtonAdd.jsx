import { useRef, useState } from "react";
import './ButtonAdd.scss'

export const ButtonAdd = ({cantidad, setCantidad, stock, handleAdd}) => {
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
					className="border-2 border-black w-10 justify-center"
					type="button"
					value="-"
					onClick={handleDisminuir}
				/>
				<input
					className="border-t-2 border-b-2 border-black w-12"
					type="text"
					readOnly
					onChange={handleAumentar || handleDisminuir} value={cantidad}
				/>
				<input
					className="border-2 border-black w-10 justify-center"
					type="button"
					value="+"
					onClick={handleAumentar}
				/>
				<button
				className="hover:ring-2 btn__add" onClick={handleAdd}
			>
				Agregar
			</button>
			</div>
		
		</>
	);
};
