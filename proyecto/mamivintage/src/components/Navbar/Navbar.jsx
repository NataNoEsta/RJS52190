import "./navbar.scss";
import { Link } from "react-router-dom";
import favicon from "/favicon.png";
import { useEffect } from "react";

const Navbar = ({ children }) => {

	return (
		<nav className="navbar__container bg-white shadow-md">
			<div className="container-fluid flex-1 flex-grow justify-around">
				<span className="inline-flex flex-row">
					<img src={favicon} alt="logo" className="w-5 h-5 m-1"></img>
					<Link to="/" className="navbar-brand">
						mami
					</Link>
					<Link to="shop/sweaters" className="nav-link active">
						Sweaters
					</Link>
					<Link to="shop/abrigos" className="nav-link active">
						Abrigos
					</Link>
					<Link to="shop/camisas" className="nav-link active">
						Camisas
					</Link>
				</span>
				<div className="navbar-nav">
					<Link
						className="nav-link active"
						aria-current="page"
						to="shop"
					>
						Shop
					</Link>
					<Link to="nosotros" className="nav-link">
						Nosotros
					</Link>
					<Link to="ayuda" className="nav-link">
						FAQ
					</Link>
				</div>
			</div>

			{children}
		</nav>
	);
};

export default Navbar;
