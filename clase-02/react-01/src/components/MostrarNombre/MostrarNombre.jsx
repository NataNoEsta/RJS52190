import { useState, useEffect } from "react";


const MostrarNombre = ({props}) => {



	return (
		<>
			<div className="profile text-center pt-5">
							
						<>
						<p>Name: <span>{props.nombre}</span></p>
                        <p>Last name: <span>{props.apellido}</span></p>
                        <p>Age:<span> {props.edad}</span></p>
                        <p>Email:<span> {props.email}</span></p>
                        </>
            </div>
		</>
	);
};
export default MostrarNombre;
