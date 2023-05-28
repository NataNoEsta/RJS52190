import "./loader.scss";
// import { useState } from "react";

export const Loader = () => {
	// const [loading, setLoading] = useState[true];

	return (
		<>
			<div className="loader h-full m-auto">
				<h1 className="animate-pulse font-bold text-2xl">
					{" "}
					cargando...
				</h1>
			</div>
		</>
	);
};
