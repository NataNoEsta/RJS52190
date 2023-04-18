const TarjetaPersonal = (props) => {
	let styles = {
		borderWidth: 2,
		borderStyle: "solid",
		borderColor: "orange",
		padding: 20,
	};
	console.log(props);
	return (
		<div style={styles}>
			<h3>Nombre: {props.nombre}</h3>
			<p>Edad: {props.edad}</p>
			<p>Curso: {props.curso}</p>
		</div>
	);
};
export default TarjetaPersonal;
