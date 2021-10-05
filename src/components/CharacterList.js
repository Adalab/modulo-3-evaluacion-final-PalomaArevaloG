import CharacterCard from './CharacterCard';
import '../styles/characterlist.scss';

import '../styles/variables.scss';
const CharacterList = (props) => {
	const html = props.data.map((characterData) => (
		<li className="list" key={characterData.id}>
			<CharacterCard characterData={characterData} />
		</li>
	));
	return (
		<>
			{props.data.length !== 0 ? (
				<ul className="characterList">{html}</ul>
			) : (
				<>
					<p className="msg-error">{`No hay ningún personaje que coincida con la palabra ${props.searchName}. Refresca la página`}</p>
				</>
			)}
		</>
	);
};

export default CharacterList;
