import "./header.css";
import bg from "../../assets/bg.png";

const Header = () => {
	return (
		<>
			<section className="headerbody">
				<figure className="heder-img"></figure>
				<img src={bg} className="header-figure"></img>
				<h1>Mami Vintage</h1>
			</section>
		</>
	);
};
export default Header;
