const CharacterCard = (props) => {
	return (
		<article>
			<img
				src={props.characterData.image}
				alt={`Foto de ${props.characterData.name}`}
			/>
			<p>Nombre: {props.characterData.name}</p>
			<p>Especie: {props.characterData.specie}</p>
		</article>
	);
};

export default CharacterCard;
