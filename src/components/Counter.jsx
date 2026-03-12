import { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)

	let p = null
	if( count === 1 ) {
		p = <p> Du har plockat 1 sten. </p>
	} else {
		p = <p> Du har plockat {count} stenar. </p>
	}

	return (
		<section className="framed">
			<div className="row">
				<button
					onClick={() => setCount(count + 1)}
				> +1 </button>
				<button
					onClick={() => setCount(count + 5)}
				> +5 </button>
			</div>
			{p}
		</section>
	)
}

export default Counter
