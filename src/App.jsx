import './App.css'
import Feeling from './components/Feeling.jsx'
import Counter from './components/Counter.jsx'
import HideShow from './components/HideShow.jsx'
import Calculator from './components/Calculator.jsx'
import FruitList from './components/FruitList.jsx'
import RandomNumbers from './components/RandomNumbers.jsx'

function App() {
	return (
		<div className="app">
			<header>Övningar state och events</header>
			<main>
				<RandomNumbers />
				<FruitList />
				<Feeling> good feelings! </Feeling>
				<Calculator />
				<Counter />
				<Counter />
				<HideShow />
			</main>
		</div>
	);
}

export default App;
