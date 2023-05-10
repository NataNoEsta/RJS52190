import { ButtonAdd } from '../ButtonAdd/ButtonAdd';
import './itemDetail.scss'
import { Link } from 'react-router-dom';
const ItemDetail = ({ item }) => {
    
    const { id, nombre, category, imagen, descripcion, precio } = item

	return (
		<article
			className="item-detail-card max-w-none flex flex-wrap flex-col justify-center align-middle m-auto pb-8"
		>            <Link to={`/shop/${category}`} className="categoria_item text-red-400 font-semibold text-base">{category}</Link>

			<img className="image_product" src={imagen} />
            <h1 className="text-2xl font-bold text-center">{nombre}</h1>

			<p className="text-base text-center">{descripcion}</p>
			<p className="text-base text-center font-semibold pb-8">Precio: ${precio}</p>
            <ButtonAdd/>

		</article>
	);
};
export default ItemDetail;