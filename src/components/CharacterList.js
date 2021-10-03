import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
	console.log('character list', props);
	const html = props.data.map((characterData, index) => (
		<li className="card" key={characterData.id}>
			<CharacterCard characterData={characterData} />
		</li>
	));
	return (
		<>
			<ul className="characterList">{html}</ul>
			{/* <p>{`No hay ningún personaje que coincida con la palabra XXX</p> */}
		</>
	);
};

export default CharacterList;
