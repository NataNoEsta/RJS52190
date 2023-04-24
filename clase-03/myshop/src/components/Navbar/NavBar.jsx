import "./Navbar.scss";
// importacion de imagen como modulo
import logo from "../../assets/octocat.png";
// alternativa: apuntar a la carpeta public

export const NavBar = () => {
	return (
		<header className="header">
			<div className="header__container">
				<span
					className="header__logo_title"
					style={{ display: "inline-flex" }}
				>
					<img src={logo} alt="logo" style={{ width: 50 }}></img>
					<h1 className="logo">Prácticas</h1>
				</span>
				<nav className="navbar">
					<a className="navbar__link" href="/">
						index
					</a>
					<a className="navbar__link" href="#">
						acerca
					</a>
					<a className="navbar__link" href="#">
						ayuda
					</a>
				</nav>
			</div>
		</header>
	);
};
