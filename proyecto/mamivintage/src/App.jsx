import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { CartWidget } from "./components/CartWidjet";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
	return (
		<>
			<Navbar />
			<CartWidget />
			<Header />
			<ItemListContainer name="Natasha" />
		</>
	);
}

export default App;
