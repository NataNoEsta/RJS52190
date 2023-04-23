const ItemListContainer = ({ figura, nombre, descripcion, precio }) => {
	const styles = {
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		alignContent: "center",
		justifyContent: "center",
		marginTop: 50,
	};
	return (
		<div className="contenedor-item" style={styles}>
			<figure>
				<img src={figura} style={{ maxWidth: 400 }} />
			</figure>
			<h3 style={{ fontSize: 22, textAlign: "center" }}>{nombre} </h3>
			<ul style={{ listStyleType: "none", textAlign: "center" }}>
				<li>
					<strong>Descripción:</strong> {descripcion}
				</li>
				<li>
					<strong>Precio:</strong> {precio}
				</li>
			</ul>
		</div>
	);
};
export default ItemListContainer;
