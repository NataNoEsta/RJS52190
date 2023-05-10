import "./ItemListContainer.scss";
import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

	const [productos, setProductos] = useState([])
	const [loading, setLoading] = useState(true)
	// la promsea se resuelve a los 3segundos

	const { category } = useParams()
	console.log(category)

	useEffect(() => {
		setLoading(true)
		pedirDatos().then((res) => {
			// muestra todos los productos si no se pide una categoría especifica
			if(!category){
				setProductos(res);
			}else{
				// mustra los productos por categorías
				setProductos(res.filter((el) => el.category === category))
			}
			
		}).catch((err) => {
			console.log(err)
		}).finally(() => {
			setLoading(false)
		})
	},[category])

	console.log("fin");

	return (
		<>
			<div className="item__container container bg-white py-10 m-auto flex flex-row flex-wrap justify-center max-w-6xl">
				{
					loading
						? <h1 className="animate-pulse font-bold text-2xl uppercase">Cargando...</h1>
						: <ItemList items={productos} />
				}
			</div>
		</>
	);
};
export default ItemListContainer;
