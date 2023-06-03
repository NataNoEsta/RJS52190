import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ItemDetail = ({item}) => {

    const { id, nombre, imagen, descripcion, precio } = item

	return (
		<article
			/*key={item.id}*/
			className="max-w-2xl ml-2 flex flex-wrap flex-col justify-center px-2"
		>
			<h1 className="text-2xl font-bold">{nombre}</h1>
			<img className="w-80" src={imagen} />
			<p className="text-base text-center">{descripcion}</p>
			<p className="text-base text-center">{precio}</p>
			<button className=" text-blue-400 border border-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
				agregar
			</button>
		</article>
	);
};
export default ItemDetail;
