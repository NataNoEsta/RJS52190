import { useRef } from "react";

const Parrafos = () => {
	const parrafoRef = useRef(null);

	// si se sellecciona un nodo puede cambiarse con innerhtml o innertext
	// const handleParrafo = () => {
	// 	parrafoRef.current.innerHTML = "Hola mundo, he cambiado!";
	// };
	const handleParrafo = () => {
		parrafoRef.current.scrollIntoView();
	};
	return (
		<div className="container sm m-auto p-4">
			<button	onClick={handleParrafo}>
				Disparar useRef</button>
			<h3 className="text-3xl px-2 font-bold text-cyan-800">Parrafo 1</h3>
			<p>
				orem ipsum dolor sit amet, consectetur adipiscing elit.
				Pellentesque eu dolor id dolor congue sollicitudin sit amet ac
				dui. Vestibulum auctor purus vel consequat consequat.{" "}
			</p>
			<h3 className="text-3xl px-2 font-bold">Parrafo 2</h3>
			<p>
				Etiam maximus euismod commodo. Aliquam et viverra diam. Nullam
				nibh libero, luctus at ultrices eleifend, mollis a sem. Aliquam
				ac velit at mi rutrum varius.
			</p>
			<h3 className="text-3xl px-2 font-bold">Parrafo 3</h3>
			<p>
				Nam hendrerit rutrum dictum. Integer tempus, ligula sed pulvinar
				maximus, est lacus tincidunt tortor, non finibus tortor nisl nec
				erat.{" "}
			</p>
			<h3 ref={parrafoRef} className="text-3xl px-2 font-bold">Parrafo 4</h3>
			<p>
				Phasellus iaculis congue neque sed condimentum. Nullam at
				scelerisque orci. Sed ac rutrum odio. Aliquam euismod eleifend
				purus, semper efficitur eros finibus vitae. Vestibulum elementum
				vel enim vel luctus. Cras sed elementum dolor. Fusce in aliquam
				erat, non sodales nulla.
			</p>
		</div>
	);
};
export default Parrafos;
