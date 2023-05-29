import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import Contacto from "./components/Contacto/Contacto";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import CategoryNavbar from "./components/CategoryNavbar/CategoryNavbar";
import { CartProvider } from "./context/CartContext"
import RegisterScreen from "./components/LoginScreen/RegisterScreen";
import { AuthProvider } from "./context/AuthContext";

function App() {
	// value solo admite 1 valor: puede ser un objeto, variable o función
	return (
		<section className="Main">
		<AuthProvider>
			<CartProvider>
			<BrowserRouter>

			
				<Routes>
					<Route path="/login" element={<LoginScreen />} />
					<Route path="/register" element={<RegisterScreen />} />
					<Route path="*" element={<Navigate to={"/login"} />} />
				</Routes>
			
				{/* <>
					<Navbar />
					<CategoryNavbar />
					<Header />
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/shop/:category" element={<ItemListContainer />}/>
						<Route path="/contacto" element={<Contacto />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/login" element={<LoginScreen />} />
						<Route path="/register" element={<RegisterScreen />} />
						<Route path="/detail/:itemId" element={<ItemDetailContainer />}/>
						<Route path="*" element={<Navigate to={"/"} />} />
					</Routes>
					<Footer />
				</> */}
			
			</BrowserRouter>
		</CartProvider>
		</AuthProvider>	
		</section>
	);
}

export default App;
