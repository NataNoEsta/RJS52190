import { useEffect, useState } from "react";
import { pedirDatos } from "../utils/pedirDatos";
import MOCK_DATA from "../data/MOCK_DATA";
import ItemList from "./ItemList/ItemList";

// componente
const ContentContain = () => {
	const [productos, setProductos] = useState([]);
	// estado de carga
	const [loading, setLoading] = useState(true)

	// efecto de montaje
	useEffect(() => {
		// se setea en true al comenzar la carga
		setLoading(true)
		pedirDatos()
		.then((res) => {
			setProductos(res);
		})
		.catch((err) => {
			console.log(err)
		})
		.finally(()=> {
			setLoading(false) // si se resuelve o se rechaza, se pasa el loading a false
		})

	}, [])

	return (

		<div className="container min-w-fit my-0 mx-2 p-2 flex flex-row flex-wrap justify-center">
			{
				loading
					? <h2>cargando...</h2>
					:<ItemList items={productos} />
			}
			
		</div>
	)
}
export default ContentContain