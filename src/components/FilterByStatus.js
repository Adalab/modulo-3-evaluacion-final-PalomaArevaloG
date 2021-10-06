const FilterByStatus = (props) => {
	return (
		<>
			<label htmlFor="status">Especie:</label>
			<select
				name="status"
				id="status"
				value={props.searchStatus}
				onChange={props.handleSearchStatus}>
				<option value="Alive">Alive</option>
				<option value="Dead">Dead</option>
				<option value="unknown">Unknown</option>
			</select>
		</>
	);
};
export default FilterByStatus;
