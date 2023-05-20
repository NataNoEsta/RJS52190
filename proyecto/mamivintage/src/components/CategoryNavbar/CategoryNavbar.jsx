
import { Link } from "react-router-dom";

const CategoryNavbar = () => {

	return (
		<nav className="categoryNavc flex flex-row bg-transparent w-full">
			<div className="category-links container flex-grow justify-around">
					<Link to="shop/sweaters" className="nav-link active">
						Sweaters
					</Link>
					<Link to="shop/abrigos" className="nav-link active">
						Abrigos
					</Link>
					<Link to="shop/camisas" className="nav-link active">
						Camisas
					</Link>

			</div>
		</nav>
	);
};

export default CategoryNavbar;