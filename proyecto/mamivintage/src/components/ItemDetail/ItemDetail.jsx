import { useState } from "react";
import { ButtonAdd } from "../ButtonAdd/ButtonAdd";
import "./itemDetail.scss";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
	const {
		id,
		nombre,
		category,
		imagen,
		long_descripcion,
		color,
		talle,
		precio,
		stock,
	} = item;

	const [cantidad, setCantidad] = useState(1);
	const [colores, setColores] = useState(null);
	let carrito = []


	const handleAdd = () => {
		console.log({
			...item,
			cantidad,
		});
		carrito.push(item)
	};

	const handleSelect = (e) => {
		setColores(e.target.value);
		console.log(colores);
	};

	return (
		<section className="item-detail-card max-w-full flex flex-row flex-wrap justify-center m-auto pb-8">
			<article className="left_side w-1/2 flex flex-wrap">
				<figure>
					<img
						className="image_product"
						src={imagen}
						alt="imagen del producto"
					/>
				</figure>
			</article>
			<article className="right_side w-1/2 mt-12">
				<h1 className="text-2xl font-bold text-center pb-4">
					{nombre}
				</h1>
				<p className="text-base py-2">{long_descripcion}</p>
				{/* <p className="text-base py-2">Color: {color}</p> */}
				<p className="text-base py-2">Talle: {talle}</p>
				<p className="text-base font-semibold pb-8">
					Precio: ${precio}
				</p>
				<p className="text-base py-2">Color: </p>
					<select onChange={handleSelect}>
						<option value={"rosa"} defaultValue="rosa">
							color
						</option>
						<option value={"azul"}>azul</option>
						<option value={"blanco"}>blanco</option>
					</select>

				<ButtonAdd
					cantidad={cantidad}
					setCantidad={setCantidad}
					stock={stock}
					agregar={handleAdd}
				/>
			</article>
			<Link
				to={`/shop/${category}`}
				className="categoria_item text-red-400 font-semibold text-base"
			>
				×{category}
			</Link>
		</section>
	);
};
export default ItemDetail;
