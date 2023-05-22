import "./navbar.scss";
import { Link } from "react-router-dom";
import favicon from "/favicon.png";
import { CartWidget } from "../CartWidget/CartWidget";

const Navbar = () => {
	return (
		<nav className="navbar__container bg-white shadow-md">
			<div className="container-fluid flex-1 flex-grow justify-around">
				<span className="inline-flex flex-row">
					<img src={favicon} alt="logo" className="w-5 h-5 m-1"></img>
					<Link to="/" className="navbar-brand">
						mami
					</Link>
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
				</span>
				<div className="navbar-nav">
					<Link to="login" className="nav-link active">
						Login
					</Link>
					<Link to="cart" className="nav-link active">
						Carrito
					</Link>
				<CartWidget/>
				</div>
				
			</div>

			
		</nav>
	);
};

export default Navbar;
