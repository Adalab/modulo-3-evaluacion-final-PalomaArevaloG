function callToApi() {
	return fetch(`https://rickandmortyapi.com/api/character`)
		.then((response) => response.json())
		.then((json) => {
			return json.results.map((character) => {
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
		});
}

export default callToApi;
