// children -> permite llamar un componente dentro de otro componente
const Contenedor = ({ children }) => {
	return (
		<section

			className="container bg-slate-900 p-4 mb m-auto flex flex-row flex-wrap justify-center max-w-none"
			style={{ color: "white" }}
		>
			{children}
		</section>
	);
};
export default Contenedor;
