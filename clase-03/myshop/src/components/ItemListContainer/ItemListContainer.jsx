import { useEffect, useState } from "react";
import { pedirDatos } from "../../utils/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useProductos } from "../hooks/useProductos";

// componente
const ItemListContainer = () => {

	const {loading, productos} = useProductos()

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
export default ItemListContainer