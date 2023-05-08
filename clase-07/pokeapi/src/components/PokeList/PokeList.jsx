import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const PokeList = () => {

	const [list, setList] = useState([]);
	console.log(list);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setList(data.results);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleAnterior = () => {};
	const handleSiguiente = () => {};

	return (
		<>	
			<h1 className="text-3xl font-medium">Poke Api</h1>
			<div className="container my-0 mx-2 p-2 flex flex-row flex-wrap justify-center">
				{
					list &&
						list.map(pokemon => <Pokemon url={pokemon.url} key={pokemon.id} />)
				}
			</div>
			<button
				className="border border-pink-400 text-white px-4 py-0"
				onClick={handleAnterior}
			>
				Anterior
			</button>
			<button
				className="border border-pink-500 text-white px-4 py-0"
				onClick={handleSiguiente}
			>
				Siguiente
			</button>
		</>
	);
};
export default PokeList;
