import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
	console.log('character list', props);
	const html = props.data.map((characterData) => (
		<li className="card" key={characterData.id}>
			<CharacterCard characterData={characterData} />
		</li>
	));
	return (
		<>
			<ul className="characterList">{html}</ul>
		</>
	);
};

export default CharacterList;
