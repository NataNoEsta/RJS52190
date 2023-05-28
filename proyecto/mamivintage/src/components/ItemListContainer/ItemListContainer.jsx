import "./ItemListContainer.scss";
import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {

	// const [, searchParams] = useSearchParams()
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);
	// la promsea se resuelve a los 3segundos

	const { category } = useParams();

	useEffect(() => {
		setLoading(true);
		// 1) crear la referencia a la db (sincronico)
		// collection -> 2 params: 1)ref local 2) nombre coleccion en firebase
		const productosRef = collection(db, "productos")
		// filtrar búsqueda -> query: 3 params:
		// 1) ref; 2) operador(str); 3) término
		const q = category 
				? query(productosRef, where("category", "==", category))
				: productosRef
		// 2) llamar a la db (async) -> retorna una PROMSESA
		getDocs(q)
			.then((res) => {
				const docs = res.docs.map((doc) => { 
					return {
						// retorna un objeto con data + el id
						...doc.data(),
						id: doc.id
					}
				})
				setProductos(docs)			
			})
			.catch((err) => console.log(err))
			.finally(() => setLoading(false)) 


		// pedirDatos()
		// 	.then((res) => {
		// 		// muestra todos los productos si no se pide una categoría especifica
		// 		if (!category) {
		// 			setProductos(res);
		// 		} else {
		// 			// mustra los productos por categorías
		// 			setProductos(res.filter((el) => el.category === category));
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	})
		// 	.finally(() => {
		// 		setLoading(false);
		// 	});
	}, [category]);

	return (
		<>
			<section className="item__container container bg-white gap-4 py-10 m-auto flex flex-row flex-wrap justify-start max-w-6xl">
				{
					loading
						? <div className="loader h-full m-auto">
							<h1 className="animate-pulse font-bold text-2xl">
								cargando...
							</h1>
						</div>
						: <ItemList items={productos} />
				}
			</section>
		</>
	);
};
export default ItemListContainer;
