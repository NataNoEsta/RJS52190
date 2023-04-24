import "./ItemListContainer.scss";

const ItemListContainer = ({ figura, nombre, descripcion, precio }) => {
	figura = "./vestido.png";
	return (
		<>
			<div className="item__container">
				<figure className="image__container">
					<img src={figura} className="item-image" />
				</figure>
				<h1 className="text-3xl font-bold text-center">algun texto</h1>
				<h3>{nombre} </h3>
				<ul>
					<li className="list__item">
						<strong>Descripción:</strong> {descripcion}
					</li>
					<li className="list__item">
						<strong>Precio:</strong> {precio}
					</li>
				</ul>
			</div>
		</>
	);
};
export default ItemListContainer;
