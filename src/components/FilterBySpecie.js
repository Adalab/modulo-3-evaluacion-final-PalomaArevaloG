import '../styles/filterbyspecie.scss';

const FilterBySpecie = (props) => {
	console.log('specie', props);
	return (
		<>
			<label htmlFor="specie">Especie:</label>
			<select
				name="specie"
				id="specie"
				value={props.searchSpecie}
				onChange={props.handleSearchSpecie}>
				<option value="all">Todos</option>
				<option value="Human">Human</option>
				<option value="Alien">Alien</option>
			</select>
		</>
	);
};
export default FilterBySpecie;
