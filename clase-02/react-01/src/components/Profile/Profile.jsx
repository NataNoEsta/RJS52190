import Avatar from "../Avatar/Avatar";
import "../../styles/wrapper.css";
import data from '../../data/data'
import MostrarNombre from "../MostrarNombre/MostrarNombre";
import { useState, useEffect } from "react";

const Profile = () => {

	const [prof, setProf] = useState({
		nombre: '',
		apellido: '',
		edad: '',
		email: ''
	})
	useEffect(()=> {
		data.map((item) => {
			setProf({
				nombre: item.nombre,
				apellido: item.apellido,
				edad: item.edad,
				email: item.email
			})
		})
	},[])

	return (
		<div className="container-fluid justify-center pt-5">
	
				<Avatar
					size={120}
					person={{
						name: "asd",
					}}
				/>
				 <MostrarNombre props={prof}
				 /> 
	
		</div>
	);
};
export default Profile;
