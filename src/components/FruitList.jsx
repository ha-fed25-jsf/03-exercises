/*
1a Skapa en array med frukter. (alltså strängar) Skapa en komponent med namnet Fruits som renderar ett <ul> element som visar alla frukterna i varsitt <li> element. Exempel på hur det kan se ut på webbsidan:
<ul> <li> Päron </li> <li> Mandarin </li> <li> Purjolök </li> </ul>

1b Se till att du inte har några varningar i konsolen, genom att lägga till key. Obs! Det är strängeligen förbjudet att använda index som key!
*/
const fruits = ['Päron', 'Mandarin', 'Purjolök']

const FruitList = () => (
	<div className="framed row">
		{fruits.map((fruit) => (
			<p key={fruit}> {fruit} </p>
		))}
	</div>
)
export default FruitList
