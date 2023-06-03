import { useRef } from "react";

const Parrafos = () => {

	const parrafoRef = useRef(null);

	const handleParrafo = () => {
		parrafoRef.current.scrollIntoView();
	};
	return (
		<div className="container flex flex-col flex-wrap p-4 my-10 mx-auto max-w-3xl">
			
			<button	className="border border-slate-800 px-5 py-2 max-w-fit mx-auto">Otro botón</button>
			
			<button	onClick={handleParrafo} className="border border-slate-800 px-5 py-2 max-w-fit mx-auto">
				Disparar useRef</button>
			<h3 className="text-3xl px-2 font-bold text-cyan-800" style={{marginTop: 50}}>Parrafo 1</h3>
			<p style={{marginTop: 50}}>
				orem ipsum dolor sit amet, consectetur adipiscing elit.
				Pellentesque eu dolor id dolor congue sollicitudin sit amet ac
				dui. Vestibulum auctor purus vel consequat consequat.{" "}
			</p>
			<h3 className="text-3xl px-2 font-bold" style={{marginTop: 50}}>Parrafo 2</h3>
			<p style={{marginTop: 50}}>
				Etiam maximus euismod commodo. Aliquam et viverra diam. Nullam
				nibh libero, luctus at ultrices eleifend, mollis a sem. Aliquam
				ac velit at mi rutrum varius.
			</p>
			<h3 className="text-3xl px-2 font-bold" style={{marginTop: 50}}>Parrafo 3</h3>
			<p style={{marginTop: 50}}>
				Nam hendrerit rutrum dictum. Integer tempus, ligula sed pulvinar
				maximus, est lacus tincidunt tortor, non finibus tortor nisl nec
				erat.{" "}
			</p>
			<h3  className="text-3xl px-2 font-bold" style={{marginTop: 50}}>Parrafo 4</h3>
			<p ref={parrafoRef} style={{marginTop: 50}}>
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
