import './App.css'
import Feeling from './components/Feeling.jsx'
import Counter from './components/Counter.jsx'
import HideShow from './components/HideShow.jsx'
import Calculator from './components/Calculator.jsx'

function App() {
	return (
		<div className="app">
			<header>
				Övningar state och events
			</header>
			<main>
				<Calculator />
				<Feeling />
				<Counter />
				<Counter />
				<HideShow />
			</main>
		</div>
	)
}

export default App
