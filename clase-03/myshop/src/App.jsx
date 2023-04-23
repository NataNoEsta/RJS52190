import './App.css'
import { Clicker } from "./components/Clicker";
// import  Equipo  from './components/Equipo'
import TarjetaPersonal from "./components/TarjetaPersonal";
import { NavBar } from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer saludo={"Holis holis"} />
			<div className="App">
				<h1>Hola, mundo!</h1>
				{/* <Equipo />
			<TarjetaPersonal nombre="Natasha Berger" edad="31" curso="React JS" /> */}
				<TarjetaPersonal
					nombre="Lucián Berger"
					edad="33"
					curso="Arte"
				/>
				<Clicker />
			</div>
		</>
	);
}

export default App