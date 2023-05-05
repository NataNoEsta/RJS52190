import { useEffect, useState } from "react";

// estructura de datos

const MOCK_DATA = [
	{
		id: 0,
		nombre: "campera",
		precio: 1500,
		imagen: "https://64.media.tumblr.com/788e48fa21a59d65f4f0c75b3a8479be/86ccc524845f549b-2a/s1280x1920/9fcdb95cb63cf90a49fc1711e80fe424c08e30b8.jpg",
		descripcion: "Lorem ipsum dolor sit amet",
		stock: 10,
	},
	{
		id: 1,
		nombre: "campera",
		precio: 1500,
		imagen: "https://64.media.tumblr.com/788e48fa21a59d65f4f0c75b3a8479be/86ccc524845f549b-2a/s1280x1920/9fcdb95cb63cf90a49fc1711e80fe424c08e30b8.jpg",
		descripcion: "Lorem ipsum dolor sit amet",
		stock: 12,
	},
	{
		id: 2,
		nombre: "campera",
		precio: 1500,
		imagen: "https://64.media.tumblr.com/788e48fa21a59d65f4f0c75b3a8479be/86ccc524845f549b-2a/s1280x1920/9fcdb95cb63cf90a49fc1711e80fe424c08e30b8.jpg",
		descripcion: "Lorem ipsum dolor sit amet",
		stock: 5,
	},
	{
		id: 3,
		nombre: "campera",
		precio: 1500,
		imagen: "https://64.media.tumblr.com/788e48fa21a59d65f4f0c75b3a8479be/86ccc524845f549b-2a/s1280x1920/9fcdb95cb63cf90a49fc1711e80fe424c08e30b8.jpg",
		descripcion: "Lorem ipsum dolor sit amet",
	},
	{
		id: 4,
		nombre: "campera",
		precio: 1500,
		imagen: "https://64.media.tumblr.com/788e48fa21a59d65f4f0c75b3a8479be/86ccc524845f549b-2a/s1280x1920/9fcdb95cb63cf90a49fc1711e80fe424c08e30b8.jpg",
		descripcion: "Lorem ipsum dolor sit amet",
		stock: 20,
	},
	{
		id: 5,
		nombre: "campera",
		precio: 1500,
		imagen: "https://64.media.tumblr.com/788e48fa21a59d65f4f0c75b3a8479be/86ccc524845f549b-2a/s1280x1920/9fcdb95cb63cf90a49fc1711e80fe424c08e30b8.jpg",
		descripcion: "Lorem ipsum dolor sit amet",
		stock: 12,
	},
	{
		id: 6,
		nombre: "campera",
		precio: 1500,
		imagen: "https://64.media.tumblr.com/788e48fa21a59d65f4f0c75b3a8479be/86ccc524845f549b-2a/s1280x1920/9fcdb95cb63cf90a49fc1711e80fe424c08e30b8.jpg",
		descripcion: "Lorem ipsum dolor sit amet",
		stock: 32,
	},
	{
		id: 7,
		nombre: "campera",
		precio: 1500,
		imagen: "https://64.media.tumblr.com/788e48fa21a59d65f4f0c75b3a8479be/86ccc524845f549b-2a/s1280x1920/9fcdb95cb63cf90a49fc1711e80fe424c08e30b8.jpg",
		descripcion: "Lorem ipsum dolor sit amet",
		stock: 9,
	},
	{
		id: 8,
		nombre: "campera",
		precio: 1500,
		imagen: "https://64.media.tumblr.com/788e48fa21a59d65f4f0c75b3a8479be/86ccc524845f549b-2a/s1280x1920/9fcdb95cb63cf90a49fc1711e80fe424c08e30b8.jpg",
		descripcion: "Lorem ipsum dolor sit amet",
		stock: 5,
	},
	{
		id: 9,
		nombre: "campera",
		precio: 1500,
		imagen: "https://64.media.tumblr.com/788e48fa21a59d65f4f0c75b3a8479be/86ccc524845f549b-2a/s1280x1920/9fcdb95cb63cf90a49fc1711e80fe424c08e30b8.jpg",
		descripcion: "Lorem ipsum dolor sit amet",
		stock: 5,
	},
	{
		id: 10,
		nombre: "campera",
		precio: 1500,
		imagen: "https://64.media.tumblr.com/788e48fa21a59d65f4f0c75b3a8479be/86ccc524845f549b-2a/s1280x1920/9fcdb95cb63cf90a49fc1711e80fe424c08e30b8.jpg",
		descripcion: "Lorem ipsum dolor sit amet",
		stock: 1,
	},
];
const pedirDatos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(MOCK_DATA);
		}, 3000);
	});
};

// componente
const ContentContain = () => {

	const [productos, setProductos] = useState(null)
	const [carrito, setCarrito] = useState([])

	useEffect(() => {
		pedirDatos().then((productos) => {
			setProductos(productos)
			console.log(productos);
		})
	})
	const handleClick=()=>{
		setCarrito(carrito.push("hols"))
		console.log(carrito)
	}

	return (
		<div className="container my-4">
			<h2 className="mb-3 text-2xl">Content</h2>
			{MOCK_DATA.map(producto => (
				<article className="container m-3 py-2 flex-auto" key={producto.id}>
					<h1  className="text-2xl font-bold">{producto.nombre}</h1>
					<button id={producto.id} className="border-2 border-purple-300 border-spacing-x-80 hover:ring-1" onClick={handleClick}>agregar</button>
				</article>
			))}
			
			
			<hr />
		</div>
	);
};

export default ContentContain;