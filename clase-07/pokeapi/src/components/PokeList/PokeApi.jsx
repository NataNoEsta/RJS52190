import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

const PokeApi = () => {
  const [id, setId] = useState(1)
  // se puede usar data solo y cambiar pokemon.name,etc en el return
  // o agregar un 'alias'
  const { data: pokemon } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    [id],
  )
  console.log(pokemon)

  const handleAnterior = () => {
    id >= 1 && setId(id - 1)
    console.log(id)
  }
  const handleSiguiente = () => {
    setId(id + 1)
    console.log(id)
  }

  return (
    <>
      <h1 className="text-3xl font-medium">Pokemon</h1>
      <div className="container my-0 mx-4 p-2 flex flex-row flex-wrap align-middle justify-center relative">
        {pokemon && (
          <div key={pokemon.id}>
            <h3 className="text-center font-semibold capitalize">
              {pokemon.name}
            </h3>
            <img
              src={pokemon.sprites.front_default}
              className="relative m-auto"
            />
            <p className="font-base relative tracking-wide">
              <strong>Habilidad:</strong> {pokemon.abilities[0].ability.name}
            </p>
            <p className="font-base relative">
              <strong>Tipo:</strong> {pokemon.types[0].type.name}
            </p>
          </div>
        )}
      </div>
      {id > 1 ? (
        <button
          className="border border-pink-400 text-white px-4 py-0"
          onClick={handleAnterior}
        >
          Anterior
        </button>
      ) : (
        <button className="border border-slate-500 text-gray px-4 py-0 cursor-not-allowed">
          Anterior
        </button>
      )}

      <button
        className="border border-pink-500 text-white px-4 py-0"
        onClick={handleSiguiente}
      >
        Siguiente
      </button>
    </>
  )
  // fetch(url, {
  //     method: 'POST',
  //     headers: {
  //         'AppToken': 'asdadadsd'
  //     },
  //     body: {
  //         //info en JSON
  //     }
  // })
}
export default PokeApi
