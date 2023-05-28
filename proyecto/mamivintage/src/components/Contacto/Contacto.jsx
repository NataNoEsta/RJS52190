import "./contacto.scss";
import { useState } from "react";

// const [coment, setComent] = useState(" ")
const Contacto = () => {

	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
    const [coment, setComent] = useState('');
	
    const handleNombre = (e) => {
		console.log(e.target.value);
        setNombre(e.target.value)
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	};
    const handleMail=(e)=>{

    }
    const handleComent = (e) => {

    }
	return (
		<section className="container w-full flex-col max-w-lg justify-center align-middle container_contacto">
			<h1 className="font-semibold text-xl">Contacto</h1>
			<div className="w-full max-w-lg">
				<form
					className="my-form flex flex-col"
					onSubmit={handleSubmit}>
					<label>Nombre</label>
					<input
						className="form py-2 rounded-lg focus:outline-none"
						type="text"
						placeholder="nombre"
						value={nombre}
						onChange={handleNombre}
					/>
					<label>Email</label>
					<input
						className="form py-2 rounded-lg focus:outline-none"
						type="email"
						placeholder="email"
						value={email}
                        onChange={handleMail}
					/>
					<label>Comentarios</label>
					<textarea
						className="form py-4 border border-pink-300 rounded-lg focus:outline-none"
						type="text"
						placeholder="comentarios"
                        onChange={handleComent}
					/>
					<button className="border border-pink-300 py-2 rounded-lg">
						Enviar
					</button>
				</form>
			</div>
		</section>
	);
};
export default Contacto;
