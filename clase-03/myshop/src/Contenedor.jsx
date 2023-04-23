// children -> permite llamar un componente dentro de otro componente
const Contenedor = ({ children }) => {
	return (
		<section
			className="container bg-dark py-2 mb-4"
			style={{ color: "white" }}
		>
			{children}
		</section>
	);
};
export default Contenedor;
