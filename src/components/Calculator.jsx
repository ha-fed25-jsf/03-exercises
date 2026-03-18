import { useState } from 'react'

const Calculator = () => {
	const [result, setResult] = useState(0)

	const buttonData = [
		{ id: 1, text: '+3', value: result + 3 },
		{ id: 2, text: '-3', value: result - 3 },
	]

	const generateFunction = value => (() => setResult(value))

	const handlePlus1 = () => setResult(result + 1)
	const handleMinus1 = () => setResult(result - 1)
	const handlePlus5 = () => setResult(result + 5)
	const handleMinus5 = () => setResult(result - 5)
	const handleReset = () => setResult(0)

	return (
		<section className="framed">
			<div className="row">
				<button onClick={generateFunction(result+2)}> +2 </button>

				{buttonData.map(obj => (
					<button key={obj.text} onClick={() => setResult(obj.value)}> {obj.text} </button>
				))}

				<button onClick={handlePlus1}> +1 </button>
				<button onClick={handleMinus1}> -1 </button>
				<button onClick={handlePlus5}> +5 </button>
				<button onClick={handleMinus5}> -5 </button>
				<button onClick={handleReset}> Reset </button>
			</div>
			<p> {result} </p>
		</section>
	)
}
export default Calculator

/*
7 Skapa en miniräknar-komponent. (Längre fram kommer vi att arbeta med input-element, men den här versionen ska bara använda buttons.) Miniräknaren ska visa värdet 0 från början. Den ska ha följande buttons:
+1
-1
+5
-5
*2
/2
Reset  (sätter värdet till 0)
*/
/*
settings({ x: 5, y: 'yes', z: true })

function settings(data) {
	// destructuring assignment
	const { x, y, z } = data
	// const x = data.x
	// const y = data.y
	// const z = data.z

	data.x = 7
	setData({ ...data, x: 7 })
}
const list = [
	[1, 2, 3],
	[4, 5, 6]
]
const list2 = [ ...list[0], ...list[1] ]
//[1, 2, 3, 4, 5, 6]
*/
