// código declarativo
const { useState } = require("react");

const Contador = () => {
	const sumar = () => setContador(contador + 1);
	const restar = () => setContador(contador - 1);

	const [contador, setContador] = useState(1);
	return (
		<div className="contador">
			<button onClick={restar}>-</button>
			<span>{contador}</span>
			<button onClick={sumar}>+</button>
		</div>
	);
};

export default Contador;
