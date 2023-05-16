import { useState, useEffect } from 'react'

const Pokemon = ({ url }) => {
  const [pokemon, setPokemon] = useState(null)
  useEffect(() => {
    //retorna una promesa
    fetch(url)
      .then((res) => res.json()) //captura el objeto response en un json que retorna una promesa
      .then((data) => {
        setPokemon(data)// resuelve la promesa del jason anterior
      })
  }, [pokemon])

  return (
    <div className="border align-middle justify-center max-w-sm m-4 p-4">
      {pokemon && (
        <div>
          <h3 className="font-base text-center underline">{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} />
          <p className="font-base text-center">
            <strong>Tipo:</strong> {pokemon.types[0].type.name}
          </p>
        </div>
      )}
    </div>
  )
}
export default Pokemon
