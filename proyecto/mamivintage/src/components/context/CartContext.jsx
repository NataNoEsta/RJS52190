import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

	const [cart, setCart] = useState([]);
	
	// se pasa al provider la funcion
	const agregarCarrito = (item) => {
		setCart([...cart, item]);
	}

	const removeCarrito = (id) => {
		setCart(cart.filter((item) => item.id !== id))
	}
	// const modificarCantidad = (id) => {
	// 	const cart_slice = [...cart]
	// 	const item = cart_slice.find((el) => el.id === id)
	// 	cart_
	// }
	const itemRepeat = (id) => {
		return cart.some((item) => item.id === id);
	}
	const vaciarCarrito = (id) => {
		setCart([])
	}

	const totalCantidad = () => {
		return cart.reduce((acc, item) => acc + item.cantidad, 0)
	}
	const totalizador = () => {
		return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
	}

	// custom provider
	// BrowserRouter y todo lo demás se pasan como children
    return (
        <CartContext.Provider
		value={{
			cart,
			agregarCarrito,
			removeCarrito,
			vaciarCarrito,
			totalCantidad,
			totalizador,
			itemRepeat,
		}}
	>
		{children}
	</CartContext.Provider>
    )
	
};