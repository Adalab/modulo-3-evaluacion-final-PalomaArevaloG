import { Link } from 'react-router-dom';
const CharacterCard = (props) => {
	console.log('charactercard', props);
	return (
		<Link to={`./character/${props.characterData.id}`}>
			<article>
				<img
					src={props.characterData.image}
					alt={`Foto de ${props.characterData.name}`}
				/>
				<p>Nombre: {props.characterData.name}</p>
				<p>Especie: {props.characterData.specie}</p>
			</article>
		</Link>
	);
};

export default CharacterCard;
