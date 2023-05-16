import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { CartWidget } from "./components/CartWidget/CartWidjet";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Footer } from "./components/Footer/Footer";



function App() {
	return (

		<BrowserRouter>
			<Navbar>
				<CartWidget />
			</Navbar>
			<Header />

			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/shop/:category" element={<ItemListContainer />} />
				<Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
				<Route path="*" element={ <Navigate to={"/"} />} />
			</Routes>
			<Footer/>
		</BrowserRouter>

	);
}

export default App;
