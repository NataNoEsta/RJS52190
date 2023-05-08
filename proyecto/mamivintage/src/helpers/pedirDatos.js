import product_data from "../data/productos";

export const pedirDatos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(product_data);
		}, 3000);
	})
};