const callToApi = (searchName) => {
	return fetch(
		`https://rickandmortyapi.com/api/character/?name=${searchName}`
	)
		.then((response) => response.json())
		.then((json) => {
			const character = json.results.map((character) => {
				return {
					id: character.id,
					name: character.name,
					image: character.image,
					specie: character.species,
					planet: character.origin.name,
					episodes: character.episode.length,
					status: character.status,
				};
			});
			return character;
		});
};

export default callToApi;
