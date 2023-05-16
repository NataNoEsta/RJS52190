import "./App.css";
import { Clicker } from "./components/Clicker/Clicker";
import TarjetaPersonal from "./components/TarjetaPersonal";
import { NavBar } from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Contenedor from "./Contenedor";
import Parrafos from "./components/Parrafos";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={
						<Contenedor>
							<ItemListContainer />
							<Clicker />				
						</Contenedor>
					}
				/>
				<Route path="/acerca" element={<TarjetaPersonal nombre="Bubblegum" edad="33" curso="Arte" />} />
				<Route path="/ayuda" element={<Parrafos />} />
				{/* <Route path="*" element={ <h1>Not found</h1> }/> <Pagina404 />*/}
				<Route path="*" element={ <Navigate to={"/"} />} />
			</Routes>	
		</BrowserRouter>
	);
}

export default App;
