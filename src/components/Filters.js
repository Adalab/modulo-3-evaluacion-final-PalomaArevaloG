import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import FilterByStatus from './FilterByStatus';
const Filters = (props) => {
	const handleFormSubmit = (ev) => {
		ev.preventDefault();
	};
	return (
		<form className="form" onSubmit={handleFormSubmit}>
			<FilterByName
				searchName={props.searchName}
				handleSearchName={props.handleSearchName}
			/>
			<FilterBySpecie
				searchSpecie={props.searchSpecie}
				handleSearchSpecie={props.handleSearchSpecie}
			/>
			<FilterByStatus
				searchStatus={props.searchStatus}
				handleSearchStatus={props.handleSearchStatus}
			/>
		</form>
	);
};

export default Filters;
