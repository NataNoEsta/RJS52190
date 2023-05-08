import "./ItemListContainer.scss";
import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

	const [productos, setProductos] = useState([])
	const [loading, setLoading] = useState(true)
	// la promsea se resuelve a los 3segundos
	useEffect(() => {
		setLoading(true)
		pedirDatos().then((res) => {
			setProductos(res);
		}).catch((err) => {
			console.log(err)
		}).finally(() => {
			setLoading(false)
		})
	},[])

	console.log("fin");

	return (
		<>
			<div className="item__container container bg-white p-4 mb m-auto flex flex-row flex-wrap justify-center max-w-none">
				{
					loading
						? <h1>Cargando...</h1>
						: <ItemList items={productos} />
				}
			</div>
		</>
	);
};
export default ItemListContainer;
