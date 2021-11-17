import '../styles/filter.scss';

const FilterBySpecie = (props) => {
	console.log('specie', props);
	return (
		<>
			<label className="form__header" htmlFor="specie">
				Especie:
			</label>
			<select
				className="form__input"
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
