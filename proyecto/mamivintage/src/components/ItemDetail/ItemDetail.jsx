import './itemDetail.scss'
const ItemDetail = ({ item }) => {
    
    const { id, nombre, category, imagen, descripcion, precio } = item

	return (
		<article
			className="item-detail-card max-w-sm gap-2 flex flex-wrap flex-col justify-center align-middle m-2"
		>            <p className="categoria_item text-left text-red-400 font-semibold text-base">{category}</p>

			<img className="image_product" src={imagen} />
            <h1 className="text-2xl font-bold text-center">{nombre}</h1>

			<p className="text-base text-center">{descripcion}</p>
			<p className="text-base text-center font-semibold">Precio: ${precio}</p>
            <button className='button-agregar'>Agregar</button>

		</article>
	);
};
export default ItemDetail;