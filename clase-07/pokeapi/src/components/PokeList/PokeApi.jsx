import { useEffect, useState } from "react";

const PokeApi = () => {
	const [pokemon, setPokemon] = useState(null);
	const [id, setId] = useState(1);
    const [name, setName] = useState(null)
	console.log(id);

	useEffect(() => {
		//retorna una promesa
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then((res) => res.json()) //captura el objeto response en un json que retorna una promesa
			.then((data) => {
				console.log(data); // resuelve la promesa del jason anterior
				setPokemon(data);
			})
			.catch((err) => console.log(err));
	}, [id]);

	const handleAnterior = () => {
		id > 1 && setId(id - 1);
	};
	const handleSiguiente = () => {
		setId(id + 1);
	};

	return (
		<>
			<h1 className="text-3xl font-medium">Poke Api</h1>
			<div className="container my-0 mx-2 p-2 flex flex-row flex-wrap align-middle justify-center">
				{pokemon && (
					<div>
						<h3 className="align-center relative">
							{pokemon.name}
						</h3>
						<img src={pokemon.sprites.front_default} />
					</div>
				)}
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
	// fetch(url, {
	//     method: 'POST',
	//     headers: {
	//         'AppToken': 'asdadadsd'
	//     },
	//     body: {
	//         //info en JSON
	//     }
	// })
};
export default PokeApi;
