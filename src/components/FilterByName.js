import '../styles/filter.scss';

const FilterByName = (props) => {
	return (
		<>
			<label className="form__header" htmlFor="name">
				Buscador de personajes:
			</label>
			<input
				className="form__input"
				type="text"
				name="name"
				id="name"
				placeholder="Ej: Morty"
				value={props.searchName}
				onChange={props.handleSearchName}
			/>
		</>
	);
};
export default FilterByName;
