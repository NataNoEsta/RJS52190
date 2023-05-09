import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { CartWidget } from "./components/CartWidget/CartWidjet";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


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
				<Route path="*" element={ <Navigate to={"/"} />} />
			</Routes>
			
		</BrowserRouter>

	);
}

export default App;
