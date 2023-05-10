import './item.scss'
const Item = ({item}) => {
    
    const { id, nombre, category, imagen, descripcion, precio } = item

	return (
		<article
			/*key={item.id}*/
			className="itemcard max-w-sm gap-2 flex flex-wrap flex-col justify-center align-middle m-2"
		>
			<h1 className="text-2xl font-bold text-center">{nombre}</h1>
            <p className="text-center text-red-400 font-semibold text-base">{category}</p>
			<img className="image_product" src={imagen} />
			<p className="text-base text-center">{descripcion}</p>
			<p className="text-base text-center font-semibold">Precio: ${precio}</p>
			<button className="btn-ver text-red-300 border border-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
				ver más...
			</button>
		</article>
	);
};
export default Item;