import './App.css'
import Contenedor from './components/Contenedor/Contenedor'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <div>
       <Contenedor>
         <ItemListContainer/>
       </Contenedor>
      </div>
    </>
  )
}

export default App
