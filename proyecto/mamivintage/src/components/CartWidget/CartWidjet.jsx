import "./cartwidget.scss";

import shophing from "../../assets/shopping-bag.png";

export const CartWidget = () => {
	let items = 1;
	const contador = () => {
		return items++;
		console.log(items);
	};
	return (
		<div className="cart_icon__container">
			<span className="cart-icon">
				<img src={shophing} />
			</span>
			<p className="cart-items">{items}</p>
		</div>
	);
};
