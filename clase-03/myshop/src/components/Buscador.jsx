import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const Buscador = () => {
	const [, setSearchParams] = useSearchParams();
	const inputref = useRef();

	function focus() {
		console.log(inputref.current);
		inputref.current.className = "border border-black";

		return inputref.current.className;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const value = inputref.current.value;

		setSearchParams({
			search: value,
		});
		console.log("valor " + value);
	};
	useEffect(() => {}, []);
	// el uso de ref en el input evita el re-renderizado del componente cuando se actualiza el valor
	return (
		<form onSubmit={handleSubmit}>
			<input
				ref={inputref}
				type="text"
				className="form-control from-slate-500"
			></input>
			<button onClick={focus} type="submit" className="btn border">
				Buscar
			</button>
		</form>
	);
};
export default Buscador;
