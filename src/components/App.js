// Fichero src/components/App.js

import { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import '../styles/reset.scss';
import '../styles/variables.scss';
import '../styles/App.scss';
import api from '../services/callToApi';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

import NotFound from './NotFound';
const App = () => {
	const [data, setData] = useState([]);
	const [searchName, setSearchName] = useState('');
	const [searchSpecie, setSearchSpecie] = useState('all');
	const [searchStatus, setSearchStatus] = useState('all');

	useEffect(() => {
		//pinto listado
		api(searchName).then((data) => {
			const orderedData = data.sort((a, b) =>
				a.name > b.name ? 1 : a.name < b.name ? -1 : 0
			);
			setData(orderedData);
		});
	}, []);
	//filtro por nombre
	const handleSearchName = (ev) => {
		ev.preventDefault();
		setSearchName(ev.currentTarget.value);
	};
	const handleSearchSpecie = (ev) => {
		setSearchSpecie(ev.currentTarget.value);
	};
	const handleSearchStatus = (ev) => {
		setSearchStatus(ev.currentTarget.value);
	};
	const filteredData = data
		.filter((character) =>
			character.name
				.toLocaleLowerCase()
				.includes(searchName.toLocaleLowerCase())
		)
		.filter(
			(character) =>
				searchSpecie === 'all' || searchSpecie === character.specie
		)
		.filter(
			(character) =>
				searchStatus === 'all' || searchStatus === character.status
		);

	console.log(filteredData);
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
						<section>
							<Filters
								searchName={searchName}
								searchSpecie={searchSpecie}
								searchStatus={searchStatus}
								handleSearchName={handleSearchName}
								handleSearchSpecie={handleSearchSpecie}
								handleSearchStatus={handleSearchStatus}
							/>
						</section>

						<section>
							<CharacterList
								data={filteredData}
								searchName={searchName}
							/>
						</section>
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
