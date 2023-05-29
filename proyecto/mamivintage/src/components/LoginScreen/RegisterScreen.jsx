import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {

	const [values, setValues] = useState({
		email: '',
		password: ''
	})
	
	const handleInput = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.values
		})
	}
	 
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
	};

	return (
		<>
			<section className="container w-full flex-col max-w-lg justify-center align-middle">
				<h2>Registrarme</h2>
				<div className="w-full max-w-lg">
					<form className="flex flex-col">
						<label htmlFor="email">email</label>
						<input
							type="email"
							placeholder="email"
							name="email"
							values={values.email}
                            required
							onChange={handleInput}
							className="form-input border border-pink-400"></input>
						<label htmlFor="password">password</label>
						<input
							type="password"
							placeholder="*****"
							name="password"
							values={values.password}
                            required
							onChange={handleInput}
							className="form-input border border-pink-400"></input>
						<button
							type="submit"
							className="border bg-blue-200 border-blue-300 mt-6 py-2 rounded-lg focus:outline-none"
							onSubmit={handleSubmit}>
							Registrate
						</button>
                        <Link to="/login"
							className="border bg-blue-100 border-blue-200 mt-3 py-2 rounded-lg text-center focus:outline-none">
							Ya estoy registrado!
						</Link>
					</form>
					
				</div>
			</section>
		</>
	);
};
export default RegisterScreen;
