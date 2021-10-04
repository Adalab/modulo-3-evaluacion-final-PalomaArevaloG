// Fichero src/components/App.js

import { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import '../styles/reset.scss';
import '../styles/variables.scss';
import '../styles/App.scss';
import api from '../services/callToApi';
import Header from './Header';
import FilterByName from './FilterByName';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import NotFound from './NotFound';
const App = () => {
	const [data, setData] = useState([]);
	const [searchName, setSearchName] = useState('');

	useEffect(() => {
		//pinto listado
		api(searchName).then((initialData) => {
			console.log(initialData);
			setData(initialData);
		});
	}, []);
	//filtro por nombre
	const handleSearchName = (ev) => {
		setSearchName(ev.currentTarget.value);
	};
	const filteredData = data.filter((character) =>
		character.name
			.toLocaleLowerCase()
			.includes(searchName.toLocaleLowerCase())
	);
	const routeData = useRouteMatch('/character/:id');
	const characterId = routeData !== null ? routeData.params.id : '';
	const selectedCharacter = data.find(
		(character) => character.id === parseInt(characterId)
	);
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/">
					<main>
						<FilterByName
							searchName={searchName}
							handleSearchName={handleSearchName}
						/>
						<CharacterList
							data={filteredData}
							searchName={searchName}
						/>
					</main>
				</Route>
				<Route path="/character/:id">
					<CharacterDetail character={selectedCharacter} />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
