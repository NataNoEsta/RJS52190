import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LoginScreen = () => {

	const { login } = useContext(AuthContext)

	const [values, setValues] = useState({
		email: '',
		password: ''
	})
	
	const handleInput = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		login(values)
		console.log(values)
	};
	return (
		<>
			<section className="container w-full flex-col max-w-lg justify-center align-middle">
				<h2>Login</h2>
				<div className="w-full max-w-lg">
					<form className="flex flex-col" 
						onSubmit={handleSubmit}>
				
						<input
							type="email"
							placeholder="email"
							name="email"
							value={values.email}
							onChange={handleInput}
							className="form-input border border-pink-400" />
						<label>password</label>
						<input
							type="password"
							placeholder="*****"
							name="password"
							value={values.password}
							onChange={handleInput}
							className="form-input border border-pink-400" />
						<button
							type="submit"
							className="border bg-blue-200 border-blue-300 mt-6 py-2 rounded-lg focus:outline-none"
							>
							Ingresar
						</button>
						<Link to="/register"
							className="border bg-blue-100 border-blue-200 mt-3 py-2 rounded-lg text-center focus:outline-none">
							Registrate
						</Link>
					</form>
					
				</div>
			</section>
		</>
	);
};
export default LoginScreen;
