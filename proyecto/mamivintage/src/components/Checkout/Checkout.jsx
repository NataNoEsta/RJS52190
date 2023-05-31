import { useState } from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: ""
    })

    const handleInput = (e) => {
        console.log("")
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
		<>
			<section className="container flex w-full flex-col max-w-2xl justify-center align-middle m-auto bg-red-100 p-8 rounded-lg">
				<h2>Finalizar compra</h2>
				<div className="w-full max-w-2xl">
					<form
						className="flex flex-col"
                        onSubmit={handleSubmit}
						>
                            <label>Nombre</label>
						<input
							type="text"
							placeholder="nombre"
							name="nombre"
							value={values.nombre}
							onChange={handleInput}
							className="form-input border border-pink-400"
						/>
						<label>Dirección</label>
						<input
							type="text"
							placeholder="Ej: Calle Falsa"
							name="direccion"
                            onChange={handleInput}
                            value={values.direccion}
							className="form-input border border-pink-400"
						/>
                        <label>Email</label>
						<input
							type="email"
							placeholder="Ej: juanito@abc.com"
							name="email"
                            onChange={handleInput}
                            value={values.email}
							className="form-input border border-pink-400"
						/>
						<button
							type="submit"
							className="btn-login-form">
							Finalizar
						</button>
					
						</form>
					<div className="container flex flex-row w-full gap-2">
						<Link
							to="/cart"
							className="btn-register">
							Regresar
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}