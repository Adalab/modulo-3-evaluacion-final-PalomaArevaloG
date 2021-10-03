// Fichero src/components/App.js

import '../styles/reset.scss';
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import logo from '../images/RickMortyLogo.png';
import CharacterList from './CharacterList';
import FilterByName from './FilterByName';
import api from '../services/callToApi';
const App = () => {
	const [data, setData] = useState([]);
	const [searchName, setSearchName] = useState('');

	useEffect(() => {
		//pinto listado
		api(searchName).then((initialData) => {
			console.log(initialData);
			setData(initialData);
		});
	}, [searchName]);
	//filtro por nombre
	const handleSearchName = (ev) => {
		setSearchName(ev.currentTarget.value);
	};
	const filteredData = data.filter((character) =>
		character.name
			.toLocaleLowerCase()
			.includes(searchName.toLocaleLowerCase())
	);

	return (
		<>
			<header className="header">
				<img
					className="header_img"
					src={logo}
					title="Rick y Morty"
					alt="Rick y Morty"
				/>
			</header>
			<FilterByName
				searchName={searchName}
				handleSearchName={handleSearchName}
			/>
			<main>
				<CharacterList data={filteredData} />
			</main>
		</>
	);
};

export default App;
