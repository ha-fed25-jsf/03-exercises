import { useState } from 'react'

const style = {
	listStyleType: 'none',
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	gap: '1.4em'
}
const liStyle = {
	boxShadow: '0 0 3px 5px goldenrod, 0 0 6px 10px beige',
	padding: '0.25em 0.6em',
	borderRadius: '0.5em'
}

const RandomNumbers = () => {
	const [numbers, setNumbers] = useState([
		{ id: 1, value: 42 },
		{ id: 2, value: 24 }
	])

	const handleClick = () => {
		const r = Math.floor(Math.random() * 100)
		const maxId = numbers[numbers.length - 1].id
		setNumbers([ ...numbers, { id: maxId + 1, value: r } ])
		console.log('Listan: ', numbers)
	}

	return (
		<div className="framed">
			<ul style={style}>
				{numbers.map(({ id, value }) => (
					<li key={id} style={liStyle}> {value} </li>
				))}
			</ul>
			<button onClick={handleClick}> Randomize! </button>
		</div>
	)
}
export default RandomNumbers
