import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
const CharacterList = (props) => {
	console.log('character list', props);
	console.log('searchname', props.input);

	const html = props.data.map((characterData) => (
		<li className="card" key={characterData.id}>
			<CharacterCard characterData={characterData} />
		</li>
	));
	return (
		<>
			{props.data.length !== 0 ? (
				<ul className="characterList">{html}</ul>
			) : (
				<>
					<p>{`No hay ningún personaje que coincida con la palabra ${props.searchName}`}</p>
					{/* <Link to="/">
						<p>Volver atrás</p>
					</Link> */}
				</>
			)}
		</>
	);
};

export default CharacterList;
