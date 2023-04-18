import './App.css'
import  Equipo  from './components/Equipo'
import  TarjetaPersonal  from './components/TarjetaPersonal'

function App() {

  return (
		<div className="App">
			<h1>Hola, mundo!</h1>
			<Equipo />
			<TarjetaPersonal nombre="Natasha Berger" edad="31" curso="React JS" />
		</div>
  );
}

export default App