import '../styles/filter.scss';

const FilterByStatus = (props) => {
	return (
		<>
			<label className="form__header" htmlFor="status">
				Status
			</label>
			<select
				className="form__input"
				name="status"
				id="status"
				value={props.searchStatus}
				onChange={props.handleSearchStatus}>
				<option value="all">Todos</option>
				<option value="Alive">Alive</option>
				<option value="Dead">Dead</option>
				<option value="unknown">Unknown</option>
			</select>
		</>
	);
};
export default FilterByStatus;
