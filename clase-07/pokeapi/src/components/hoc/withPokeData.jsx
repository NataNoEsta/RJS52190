// High Order Component
// recibe componente por parámetro
import { useState, useEffect, Component } from "react"

export const withPokeData = (Component) => {
    // se crea el componente dentro del hoc
    const withPokeData = (props) => {
        const [id, setId] = useState(1)
        const { data: pokemon } = useFetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`,
            [id],
          )
          return (
          <Component id={id} {...props}/>
          )
    }
     
}