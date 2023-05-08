import "./cartwidget.scss";
import shophing from "/shopping-bag.png";

export const CartWidget = () => {
	return (
		<div className="cart_icon__container">
			<span className="cart-icon">
				<img src={shophing} />
			</span>
			<p className="cart-items">1</p>
		</div>
	);
};
