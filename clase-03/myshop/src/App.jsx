import "./App.css";
import { Clicker } from "./components/Clicker";
import TarjetaPersonal from "./components/TarjetaPersonal";
import { NavBar } from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import Contenedor from "./Contenedor";
import Parrafos from "./components/Parrafos";
import PokeApi from "./components/PokleApi";

function App() {
	return (
		<>
			<NavBar />

			<div className="App">
				<h1 className="text-3xl font-bold underline"></h1>
				<TarjetaPersonal nombre="Bubblegum" edad="33" curso="Arte" />

				<Contenedor>
					<ItemListContainer saludo={"Holis holis"} />
					<Clicker />
				</Contenedor>
				<Parrafos />
			</div>
			<PokeApi />
		</>
	);
}

export default App;
