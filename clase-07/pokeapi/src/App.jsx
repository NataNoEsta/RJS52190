import './App.css'
import Contenedor from './components/Contenedor/Contenedor'
import PokeList from './components/PokeList/PokeList'
import PokeApi from './components/PokeList/PokeApi'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container container_home max-w-full justify-center flex flex-wrap relative">
          <Contenedor>
            {' '}
            <Routes>
              <Route path="/" element={<PokeList />} />
              <Route path="/pokeapi" element={<PokeApi />} />
            </Routes>
          </Contenedor>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
