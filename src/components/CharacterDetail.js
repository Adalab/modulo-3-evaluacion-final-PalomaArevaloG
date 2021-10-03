const CharacterDetail = (props) => {
	<>
		<img src={props.character.image} alt={props.character.name} />
		<ul>
			<li>Nombre: {props.character.name}</li>
			<li>Especie: {props.character.species}</li>
			<li>Planeta de origen: {props.character.origin.name}</li>
			<li>
				Número de episodios en los que aparece:
				{props.character.episode.length}
			</li>
			<li> ¿Está vivo? {props.character.status}</li>
		</ul>
	</>;
};
export default CharacterDetail;
