import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { CartWidget } from "./components/CartWidget/CartWidjet";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";

function App() {
	return (
		<>
			<Navbar>
				<CartWidget />
			</Navbar>
			<Header />
				<ItemListContainer
					figura="../src/assets/vestido.png"
					nombre="Vestido corte canesú"
					descripcion="Vestido midi, tela rígida con broderie y apliques."
					precio="$2500"
				>
					<ButtonAdd />
				</ItemListContainer>
		</>
	);
}

export default App;
