import { useEffect, useState } from "react"

// se pone una variable array, por defecto vacío
// al pasar un array vacío el hook puede reutilizarse por componentes 
// que no necesiten dependencias
export const useFetch = (url, arr = []) => {
    const [data, setData] = useState(null)

    useEffect(()=> {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err))
    },arr)
    
    return {
        data
    }
}