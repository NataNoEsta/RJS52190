// CASO 1
// const TarjetaPersonal = (props) => {
// CASO 2
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

	return (
		<div style={styles} className="card__tarjeta">
			<h3>Nombre: {nombre}</h3>
			<p>Edad: {edad}</p>
			<p>Curso: {curso}</p>
		</div>
	);
};
export default TarjetaPersonal;
