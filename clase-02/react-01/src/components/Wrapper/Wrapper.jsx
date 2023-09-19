import { useState } from "react";
import Thingy from "../Thingy/Thingy";

export default function Wrapper({ children }) {
	
	const [val, setVal] = useState(null);

	function handleChange(e) {
		setVal(e.target.value);
	}

	return (
		<div
			className="wrapper container-fluid"
			style={{ backgroundColor: `${val}` }}>
			{children}
			<Thingy
				val={val}
				handleChange={handleChange}
			/>
		</div>
	);
}
