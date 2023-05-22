import { useContext, useEffect, useRef, useState } from "react";
import "./cartwidget.scss";
import shophing from "/shopping-bag.png";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
	const cartRef = useRef();
	const { cart } = useContext(CartContext);

	const [count, setCount] = useState(0);
	
	useEffect(()=>{
		setCount(cart.length)
		console.log(count)
	})

	return (
		<div className="cart_icon__container relative mr-8">
			<span className="cart-icon">
				<img src={shophing} />
			</span>
			
				 <p
					ref={cartRef}
					className="cart-items text-red-700 mt-2 font-bold"
				>{
					cart? count : count
				}</p> 


		</div>
	);
};
