function callToApi() {
	return fetch('https://rickandmortyapi.com/api/character')
		.then((response) => response.json())
		.then((json) => {
			return json.results.map((character) => {
				return {
					id: character.id,
					name: character.name,
					image: character.image,
					specie: character.species,
				};
			});
		});
}

export default callToApi;
