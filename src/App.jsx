import './App.css'
import Feeling from './components/Feeling.jsx'
import Counter from './components/Counter.jsx'

function App() {
	return (
		<div className="app">
			<header>
				Övningar state och events
			</header>
			<main>
				<Feeling />
				<Counter />
				<Counter />
			</main>
		</div>
	)
}

export default App
