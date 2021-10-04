import { Link } from 'react-router-dom';
import '../styles/charactercard.scss';
import '../styles/variables.scss';
const CharacterCard = (props) => {
	console.log('charactercard', props);
	return (
		<Link to={`./character/${props.characterData.id}`}>
			<article className="listcard">
				<img
					className="listcard__img"
					src={props.characterData.image}
					alt={`Foto de ${props.characterData.name}`}
				/>
				<h2 classname="listcard__name">
					Nombre: {props.characterData.name}
				</h2>
				<p classname="listcard__text">
					Especie: {props.characterData.specie}
				</p>
			</article>
		</Link>
	);
};

export default CharacterCard;
