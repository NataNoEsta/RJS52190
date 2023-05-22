import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import CategoryNavbar from "./components/CategoryNavbar/CategoryNavbar";
import { CartContext } from "./components/context/CartContext";

function App() {
	const [cart, setCart] = useState([])

	console.log(cart)

	// se pasa al provider la funcion
	const agregarCarrito = (item) => {
		setCart([...cart, item])

	}
	const itemRepeat = (id) => {
		return cart.some((item) => item.id === id)
	}

	// value solo admite 1 valor: puede ser un objeto, variable o función
	return (
		<CartContext.Provider value={{
			cart, 
			agregarCarrito,
			itemRepeat
			}}>
		
		<BrowserRouter>
			<Navbar/>
			<CategoryNavbar />
			<Header />

			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/shop/:category" element={<ItemListContainer />} />
				<Route path="/cart" element={<Cart/>}/>
				<Route path="/login" element={<LoginScreen />} />
				<Route
					path="/detail/:itemId"
					element={<ItemDetailContainer />}
				/>
				<Route path="*" element={<Navigate to={"/"} />} />
			</Routes>

			<Footer />
		</BrowserRouter>

		</CartContext.Provider>
	);
}

export default App;
