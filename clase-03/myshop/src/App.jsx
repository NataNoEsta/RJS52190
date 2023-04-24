import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Clicker } from "./components/Clicker";
// import  Equipo  from './components/Equipo'
import TarjetaPersonal from "./components/TarjetaPersonal";
import { NavBar } from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import Contenedor from "./Contenedor";
import Parrafos from "./components/Parrafos";

function App() {
	return (
		<>
			<NavBar />

			<div className="App">
				{/* <Equipo />
			<TarjetaPersonal nombre="Natasha Berger" edad="31" curso="React JS" /> */}
				<TarjetaPersonal nombre="Bubblegum" edad="33" curso="Arte" />

				<Contenedor>
					<ItemListContainer saludo={"Holis holis"} />
					<Clicker />
				</Contenedor>
				<Parrafos />
			</div>
		</>
	);
}

export default App;
