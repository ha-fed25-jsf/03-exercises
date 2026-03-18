import "./App.css";
import Feeling from "./components/Feeling.jsx";
import Counter from "./components/Counter.jsx";
import HideShow from "./components/HideShow.jsx";

function App() {
	return (
		<div className="app">
			<header>Övningar state och events</header>
			<main>
				<Feeling> good feelings! </Feeling>
				<Counter />
				<Counter />
				<HideShow />
			</main>
		</div>
	);
}

export default App;
