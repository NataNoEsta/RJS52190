import { useRef } from "react";
import "./cartwidget.scss";
import shophing from "/shopping-bag.png";

export const CartWidget = () => {
const count = 0
	return (
		<div className="cart_icon__container relative mr-8">
			<span className="cart-icon">
				<img src={shophing} />
			</span>
			{
				count > 0 
					? <p  className="cart-items text-red-700 mt-2 font-bold">{count}</p>
					: <p className="cart-items text-red-700 mt-2 font-bold">*</p>
			}
			
		</div>
	);
};
