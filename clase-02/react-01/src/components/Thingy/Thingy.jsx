import { useEffect, useState } from "react";
import colors from "./colors";

const Thingy = ({val, handleChange}) => {

	const colorses = [...colors]


	return (
		<>
			<div className="col-sm select">
			<label
				htmlFor="color"
				name="color">
				Select color
				<select
					name="color"
					value={val}
					onChange={handleChange}
					>
					{colorses.map((opt) => (
						<option key={opt}>{opt}</option>
					))}
				</select>
			</label>
			</div>
		</>
	);
};

export default Thingy;
