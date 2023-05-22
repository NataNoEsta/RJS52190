import { useContext, useState } from "react";
import { ButtonAdd } from "../ButtonAdd/ButtonAdd";
import "./itemDetail.scss";
import { Link } from "react-router-dom";
import SkuVariation from "./SkuVariation";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {

	const {agregarCarrito, itemRepeat} = useContext(CartContext)

	itemRepeat(item.id)
	console.log(itemRepeat(item.id))

	const {
		id,
		nombre,
		category,
		imagen,
		long_descripcion,
		talle,
		variants,
		precio,
		stock,
	} = item;

	const [cantidad, setCantidad] = useState(1);
	const [variant, setVariant] = useState(null)

	const handleAdd = () => {
	
		const newItem = {
			...item, 
			cantidad, 
			variant 
		}
		agregarCarrito(newItem)
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
				<SkuVariation setVariant={setVariant} options={variants}/>

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
