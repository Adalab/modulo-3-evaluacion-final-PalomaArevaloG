import { Link } from 'react-router-dom';
const CharacterDetail = (props) => {
	// console.log('detail', props);

	return (
		<>
			<Link to="/">
				<p>Volver atrás</p>
			</Link>
			<img src={props.character.image} alt={props.character.name} />
			<ul>
				<li>Nombre: {props.character.name}</li>
				<li>Especie: {props.character.species}</li>
				<li>Planeta de origen: {props.character.planet}</li>
				<li>
					Número de episodios en los que aparece:
					{props.character.episodes}
				</li>
				<li> ¿Está vivo? {props.character.status}</li>
			</ul>
		</>
	);
};

export default CharacterDetail;
