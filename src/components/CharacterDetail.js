import { Link } from 'react-router-dom';
const CharacterDetail = (props) => {
	console.log('detail', props);
	<>
		<Link to="/">
			<p>Volver atrás</p>
		</Link>
		<img src={props.characterData.image} alt={props.characterData.name} />
		<ul>
			<li>Nombre: {props.characterData.name}</li>
			<li>Especie: {props.characterData.species}</li>
			<li>Planeta de origen: {props.characterData.origin.name}</li>
			<li>
				Número de episodios en los que aparece:
				{props.characterData.episode.length}
			</li>
			<li> ¿Está vivo? {props.characterData.status}</li>
		</ul>
	</>;
};
export default CharacterDetail;
