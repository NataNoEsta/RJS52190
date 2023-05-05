import "./ItemListContainer.scss";

const ItemListContainer = ({
	figura,
	nombre,
	descripcion,
	precio,
	children,
}) => {
	figura = "./vestido.png";

	const promesa = new Promise((resolve, reject) => {
		setTimeout(() => {
			// resolve("resuelto");
			reject("rechazada");
		}, 3000);
	});
	// la promsea se resuelve a los 3segundos
	promesa
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
	console.log("fin");

	return (
		<>
			<div className="item__container container md:container justify-center align-middle">
				<figure className="image__container">
					<img src={figura} className="item-image" />
				</figure>
				<h3 className="text-xl font-bold">{nombre} </h3>
				<ul className="list-none py-2">
					<li className="list__item text-base">
						<strong>Descripción:</strong> {descripcion}
					</li>
					<li className="list__item text-base">
						<strong>Precio:</strong> {precio}
					</li>
				</ul>
				{children}
			</div>
		</>
	);
};
export default ItemListContainer;
