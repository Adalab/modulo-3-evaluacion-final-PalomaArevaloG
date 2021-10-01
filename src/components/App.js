// Fichero src/components/App.js

import '../styles/reset.scss';
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import logo from '../images/RickMortyLogo.png';
import CharacterList from './CharacterList';
import api from '../services/callToApi';
const App = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		api().then((initialData) => {
			console.log(initialData);
			setData(initialData);
		});
	}, []);
	return (
		<>
			<header className="header">
				<img
					className="header_img"
					src={logo}
					title="Rick y Morty"
					alt="Rick y Morty"
				/>
				<form>
					Buscador de personajes:
					<input type="text" />
				</form>
			</header>
			<main>
				<CharacterList data={data} />
			</main>
		</>
	);
};

export default App;
