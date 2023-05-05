import "./cartwidget.scss";
import shophing from "/shopping-bag.png";

import { useRef, useEffect } from "react";

export const CartWidget = () => {
	let cart = ["vestido", "pollera", "shorts", "saco de pana", "aros de oro"]
	console.log(cart)	
	const itemsCart = cart.length;
	const nroItems = useRef(itemsCart)
	useEffect(()=> {
		nroItems.current++
	})

	return (
		<div className="cart_icon__container">
			<span className="cart-icon">
				<img src={shophing} />
			</span>
			<p className="cart-items">{itemsCart}</p>
		</div>
	);
};
