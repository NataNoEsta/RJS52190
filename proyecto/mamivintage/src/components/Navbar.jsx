import "./navbar.css";

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Mami Vintage
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup"
					>
						<div className="navbar-nav">
							<a
								className="nav-link active"
								aria-current="page"
								href="/"
							>
								Shop
							</a>
							<a className="nav-link" href="#">
								Nosotros
							</a>
							<a className="nav-link" href="#">
								FAQ
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
export default Navbar;
