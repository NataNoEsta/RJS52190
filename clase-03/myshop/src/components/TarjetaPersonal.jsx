// CASO 1
// const TarjetaPersonal = (props) => {
// CASO 2
import { useEffect } from "react";
export const TarjetaPersonal = ({ nombre, edad, curso }) => {
	let styles = {
		borderWidth: 2,
		borderStyle: "solid",
		borderColor: "orange",
		padding: 20,
	};
	// desestructuración //
	// const { nombre, edad, curso } = props;
	// console.log(props);
	const clickear = (event) => {
		console.log(event);
	};
	useEffect(() => {
		window.addEventListener("click", clickear);
		return () => {
			window.removeEventListener("click", clickear);
		};
	}, []);

	return (
		<div style={styles} className="card__tarjeta container mb-2 py-2 mt-4">
			<h3>Nombre: {nombre}</h3>
			<p>Edad: {edad}</p>
			<p>Curso: {curso}</p>
			<button className="rounded-full bg-slate-500 border-1 px-4 py-1">
				Coso
			</button>
		</div>
	);
};
export default TarjetaPersonal;
