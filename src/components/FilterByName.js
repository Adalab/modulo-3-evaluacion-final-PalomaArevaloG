import '../styles/filterbyname.scss';

const FilterByName = (props) => {
	const handleFormSubmit = (ev) => {
		ev.preventDefault();
	};
	return (
		<form className="form" onSubmit={handleFormSubmit}>
			<h1 className="form__header">Buscador de personajes:</h1>
			<input
				className="form__input"
				type="text"
				name="name"
				id="name"
				placeholder="Introduce un personaje"
				value={props.searchName}
				onChange={props.handleSearchName}
			/>
		</form>
	);
};
export default FilterByName;
