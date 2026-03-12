import './Feeling.css'
import { useState } from 'react'

const Feeling = () => {
	const [feeling, setFeeling] = useState('happy')

	return (
		<section className="feeling framed">
			<div className="row">
				<button
					onClick={() => setFeeling('happy')}
				> Happy </button>
				<button
					onClick={() => setFeeling('excited')}
				> Excited </button>
			</div>
			<p> I am {feeling} </p>
		</section>
	)
}

export default Feeling
