import { useContext } from "react";
import "./cartwidget.scss";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";

export const CartWidget = () => {
	const { totalCantidad } = useContext(CartContext);
	

	return (
		<div className="cart_icon__container relative inline-flex">
			<span className="cart-icon">
				<Link to="cart" className="nav-link active">
					<FiShoppingCart />
					<p className="cart-items">{totalCantidad()}</p>
				</Link>
			</span>
		</div>
	);
};
