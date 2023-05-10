import "./cartwidget.scss";
import shophing from "/shopping-bag.png";

export const CartWidget = () => {
	return (
		<div className="cart_icon__container relative mr-8">
			<span className="cart-icon">
				<img src={shophing} />
			</span>
			<p className="cart-items text-red-700 mt-2 font-bold">1</p>
		</div>
	);
};
