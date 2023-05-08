import { useState, useEffect } from "react"

const Pokemon = ({url}) => {
    const [pokemon, setPokemon] = useState(null)
    useEffect(() => {
		//retorna una promesa
		fetch(url)
			.then((res) => res.json()) //captura el objeto response en un json que retorna una promesa
			.then((data) => {
				console.log(data); // resuelve la promesa del jason anterior
				setPokemon(data);
			})
			.catch((err) => console.log(err));
	}, []);

    return (
        <div className="border align-middle justify-center max-w-sm m-4 p-2 flex-initial">
        {   
            pokemon && 
            <div>
                <h3 className="align-center relative">
                    {pokemon.name} 
                </h3>
                <img src={pokemon.sprites.front_default} />
            </div>
        }
    </div>
    )
}
export default Pokemon;