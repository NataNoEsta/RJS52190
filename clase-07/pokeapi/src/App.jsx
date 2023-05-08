import "./App.css";
import Contenedor from "./components/Contenedor/Contenedor";
import PokeList from "./components/PokeList/PokeList";
// import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {
	return (
		<>
			<div>
				{" "}
				{/* <ItemListContainer/> */}
				{/* <PokeApi/> */}
				<Contenedor>
					<PokeList />
				</Contenedor>
			</div>
		</>
	);
}

export default App;
