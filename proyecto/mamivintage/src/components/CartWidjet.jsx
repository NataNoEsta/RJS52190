import shophing from "../assets/shopping-bag.png";
export const CartWidget = () => {
	let items = 1;
	const contador = () => {
		return items++;
		console.log(items);
	};
	return (
		<div style={{ display: "flex", flexDirection: "row", paddingRight: 30 }}>
			<span className="cart-icon">
				<img
					src={shophing}
					style={{
						maxWidth: 30,
						height: "auto",
						display: "flex",
					}}
				/>
			</span>
			<p className="cart-items">{items}</p>
		</div>
	);
};
