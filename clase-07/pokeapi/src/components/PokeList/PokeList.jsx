import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const PokeList = () => {
	// para hacer la paginación se parte de una url base
	const [list, setList] = useState(null);
	const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
	// el state de paginacion trae el anterior/siguiente set de datos de c/pag
	const [pagination, setPagination] = useState({
		next: null,
		previous: null,
	});

	useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					setList(data.results);
					setPagination({
						next: data.next,
						previous: data.previous,
					})
				})
				.catch((err) => console.log(err))
		}, 1000)
	}, [url])

	const handleSiguiente = () => {
		pagination.next && setUrl(pagination.next);
	};
	const handleAnterior = () => {
		pagination.previous && setUrl(pagination.previous);
	};

	return (
		<>
			<div className="container mx-10 py-8 flex flex-row flex-wrap justify-center mt-8 relative">
				{
				list &&
						list.map(pokemon => <Pokemon url={pokemon.url} key={pokemon.id} />)
				}
			</div>
			<button	className="border border-pink-400 text-white px-4 py-0"
				onClick={handleAnterior}>Anterior</button>
			<button className="border border-pink-500 text-white px-4 py-0"
				onClick={handleSiguiente}>Siguiente</button>
		</>
	);
};
export default PokeList;
