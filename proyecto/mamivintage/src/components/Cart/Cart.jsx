import { useContext } from "react";
import "./cart.scss";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../context/CartContext";

const Cart = () => {
	const { cart, vaciarCarrito, totalizador, removeCarrito } =
		useContext(CartContext);

	return (
		<>
			<section className="container_cart max-w-6xl flex flex-col flex-wrap justify-center align-middle m-auto p-4">
				<h1 className="text-2xl semibold text-center">
					Detalle de compra
				</h1>
				{cart &&
					cart.map((item) => (
						<div
							key={item.id}
							className="itemcard itemcard_cart gap-2 flex flex-row justify-between align-middle m-4 pr-4"
						>
							<h1 className="text-2xl font-bold text-center">
								{item.nombre}
							</h1>
							<img className="image_product" src={item.imagen} />
							<p className="text-base text-left">
								{item.descripcion}
							</p>

							<div className="totales flex flex-col w-fit">
								<p className="text-base text-center font-semibold">
									Cantidad: {item.cantidad}
								</p>
								<p className="text-base text-center font-semibold">
									Precio: ${item.precio}
								</p>
							</div>
							<p className="text-base text-center font-semibold">
								Subtotal: ${item.precio * item.cantidad}
							</p>
							<button
								className="border-2 border-red-500 text-red-500 bg-none font-bold py-3 px-3 rounded-3xl"
								onClick={() => removeCarrito(item.id)}
							>
								<FiTrash2 />
							</button>
						</div>
					))}
				<div className="container w-auto max-w-sm flex-col">
					<p className="text-base text-center font-semibold">
						Total: ${totalizador()}
					</p>
					<button
						className="border border-red-600 text-red-600 bg-none font-bold py-2 px-6 rounded-3xl"
						onClick={vaciarCarrito}
					>
						Vaciar carrito
					</button>
				</div>
			</section>
		</>
	);
};
export default Cart;
