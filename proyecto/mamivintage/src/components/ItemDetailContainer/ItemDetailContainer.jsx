import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()
    console.log(itemId)
    console.log(item)
    
    useEffect(()=> {
        setLoading(true)
        pedirDatos()
            .then((res) => setItem( res.find((el) => el.id === Number(itemId)) ))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    },[])

    return (
        <div className="item__container container bg-white py-10 m-auto flex flex-row flex-wrap justify-center max-w-6xl">
        {
            loading
                ? <h1 className="animate-pulse font-bold text-2xl uppercase">Cargando...</h1>
                : <ItemDetail item={item} />
        }
    </div>
    )
}
export default ItemDetailContainer