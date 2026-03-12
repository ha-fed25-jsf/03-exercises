import { useState } from 'react'

const HideShow = () => {
	const [isShowing, setIsShowing] = useState(true)

	return (
		<section className="framed">
			<div className="row">
				<button
					onClick={() => setIsShowing(true)}
					disabled={isShowing}
					> Visa </button>
				<button
					onClick={() => setIsShowing(false)}
					disabled={!isShowing}
					> Dölj </button>
			</div>
			{isShowing && <p> Jag ska växla mellan synlig och osynlig. </p>}

		</section>
	)
}
export default HideShow

/*
Conditional rendering:
{condition ? <p> exempel </p> : null}

Short-circuiting:  && och ||
{condition && <p> exempel </p>}

Exempel:
let x = 2
x == 2 && y > 5   -->  reduceras till  y > 5
*/

/*
Göra saker osynliga?
display: none / block/flex/grid osv.  (smidigaste sättet att plocka bort)
opacity: 0  (bäst för animering - tona in)
visibility: hidden / visible  (tydligast)
height: 0
lägga det under andra saker
flytta utanför synliga området

Utan CSS: conditional rendering
*/