import "./ItemListContainer.css";
import Card from "react-bootstrap/Card";

export const ItemListContainer = ({ saludo }) => {
	return (
		<>
			<div className="list__container container my-5">
				<h2>Item List Container</h2>
				<hr />
				<p>{saludo}</p>
			</div>
		</>
	);
};
