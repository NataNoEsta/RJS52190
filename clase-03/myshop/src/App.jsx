import "./App.css";
import { Clicker } from "./components/Clicker/Clicker";
import TarjetaPersonal from "./components/TarjetaPersonal";
import { NavBar } from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import Contenedor from "./Contenedor";
import Parrafos from "./components/Parrafos";
import ContentContain from "./components/ContentContain";

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
					<ContentContain />
				</Contenedor>

				
				<Parrafos />
			</div>
		</>
	);
}

export default App;
