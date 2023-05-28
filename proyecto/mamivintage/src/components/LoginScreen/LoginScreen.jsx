import { useState } from "react";

// const [values, setValues] = useState({
//     email: '',
//     password: ''

// })
const handleSubmit = (e) => {
	e.preventDefault();
	console.log(e);
};

const LoginScreen = () => {
	return (
		<>
			<section className="container w-full flex-col max-w-lg justify-center align-middle">
				<h2>Login</h2>
				<div className="w-full max-w-lg">
					<form className="flex flex-col">
						<label htmlFor="email">email</label>
						<input
							type="email"
							placeholder="email"
							name="email"
                            required
							className="form-input border border-pink-400"></input>
						<label htmlFor="password">password</label>
						<input
							type="password"
							placeholder="*****"
							name="password"
                            required
							className="form-input border border-pink-400"></input>
						<button
							type="submit"
							className="border bg-blue-200 border-blue-300 mt-3 py-2 rounded-lg focus:outline-none"
							onSubmit={handleSubmit}>
							Ingresar
						</button>
					</form>
				</div>
			</section>
		</>
	);
};
export default LoginScreen;
