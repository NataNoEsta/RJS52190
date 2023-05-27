import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()
    // console.log(itemId)
    // console.log(item)
    
    useEffect(()=> {
        setLoading(true)
        pedirDatos()
            .then((res) => setItem( res.find((el) => el.id === Number(itemId)) ))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    },[])

    return (
        <div className="item__container container bg-white py-10 flex flex-row flex-wrap justify-center max-w-6xl">
        {
            loading
                ? <h1 className="animate-pulse text-center font-bold text-2xl">cargando...</h1>
                : <ItemDetail item={item} key={item.id}/>
        }
    </div>
    )
}
export default ItemDetailContainer