
const styles = {
	color: "white",
	width:500,
	margin: 10,
	paddiing: 5
}

const handleSubmit = (e) => {
	e.preventDefault()
	console.log(e)
}
function MyForms() {
	return (
		<div className="container bg-slate-900 p-4 mb m-auto flex flex-col flex-wrap justify-center max-w-2xl text-slate-50">
			<form className="form flex-col p-10 m-2 max-w-md" onSubmit={handleSubmit}>
				<input style={styles} type="text" placeholder="nombre" name="text" />
				<input style={styles} type="text" placeholder="email" name="email"/>
				<button type="submit" className="py-2 px-5 border border-sky-100">enviar</button>
			</form>
		</div>
	);
};
export default MyForms;
