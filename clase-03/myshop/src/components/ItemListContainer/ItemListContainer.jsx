import "./ItemListContainer.css";
import { useState } from "react";
// import ItemList from "./ItemList/ItemList";

export const ItemListContainer = ({ saludo }) => {
	return (
		<>
			<div className="list__container">
			
				<h2>Este container es un children</h2>
				<hr />
				<p>{saludo}</p>
			</div>
		</>
	);
};
