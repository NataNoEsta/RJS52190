import './item.scss'
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    
    const { id, nombre, category, imagen, descripcion, precio } = item

	return (
		<article
			/*key={item.id}*/
			className="itemcard gap-2 max-w-sm flex flex-wrap flex-col justify-between align-middle m-4"
		>
			<h1 className="text-2xl font-bold text-center">{nombre}</h1>
            <Link to={`/shop/${category}`} className="text-center text-red-400 font-semibold text-base">{category}</Link>
			<img className="image_product" src={imagen} />
			<p className="text-base text-center">{descripcion}</p>
			<p className="text-base text-center font-semibold">Precio: ${precio}</p>
			<Link to={`/detail/${item.id}`} className="btn-ver text-red-300 border-2 mb-2 font-medium rounded-lg text-sm py-2.5 text-center mx-auto mb-0">
				ver más...
			</Link>
		</article>
	);
};
export default Item;