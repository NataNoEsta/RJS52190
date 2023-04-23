import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Clicker } from "./components/Clicker";
// import  Equipo  from './components/Equipo'
import TarjetaPersonal from "./components/TarjetaPersonal";
import { NavBar } from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import Contenedor from "./Contenedor";

function App() {
	return (
		<>
			<NavBar />

			<div className="App">
				<h1>Hola, mundo!</h1>
				{/* <Equipo />
			<TarjetaPersonal nombre="Natasha Berger" edad="31" curso="React JS" /> */}
				<TarjetaPersonal
					nombre="Lucián Berger"
					edad="33"
					curso="Arte"
				/>

				<Contenedor>
					<ItemListContainer saludo={"Holis holis"} />
					<Clicker />
				</Contenedor>
			</div>
		</>
	);
}

export default App;
