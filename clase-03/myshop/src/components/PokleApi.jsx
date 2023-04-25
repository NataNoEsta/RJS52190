import { useEffect, useState } from "react";

const PokeApi = () => {
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/1")
			.then((resp) => resp.json())
			.then((data) => {
				setPokemon(data)

			.catch((err) => console.log(err));
			});
	});

	return (
		<div className="container my-4">
			<h2>PokeApi</h2>
                
			<hr />
		</div>
	);
};

export default PokeApi;