import "./App.css";

function App() {
	return <MostrarNombre />;
}
const MostrarNombre = () => {
	const nombre = "Natasha";
	const edad = 31;
	const email = "nasnas@asasad.com";
	return (
		<>
			<h3>{nombre}</h3>
			<div>{edad}</div>
			<div>{email}</div>
		</>
	);
};
const MostrarNombreComonente = () => {
	return <h3>Soy un componente</h3>;
};

export default App;
