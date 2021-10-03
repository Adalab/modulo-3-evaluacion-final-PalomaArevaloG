const FilterByName = (props) => {
	return (
		<form>
			Buscador de personajes:
			<input
				type="text"
				name="name"
				id="name"
				placeholder="Introduce el nombre de un personaje"
				value={props.searchName}
				onChange={props.handleSearchName}
			/>
		</form>
	);
};
export default FilterByName;
