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

	const [cantidad, setCantidad] = useState(1)
	const [size, setSize] = useState(null) 

	const handleAdd = () => {

		console.log({
			...item,
			cantidad
		})
	}

	const handleSelect = (e) =>{
		setSize(e.target.value)
		console.log(size)
	}

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
				<p className="text-base py-2">Color: {color}</p>
				<p className="text-base py-2">Talle: <select onChange={handleSelect}>
					<option value={"S"} defaultValue={"S"}>S</option>
					<option value={"M"}>M</option>
					<option value={"L"}>L</option>
				</select></p>
				<p className="text-base font-semibold pb-8">Precio: ${precio}</p>

				

				<ButtonAdd cantidad={cantidad} setCantidad={setCantidad} stock={stock} handleAdd={handleAdd}/>
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
