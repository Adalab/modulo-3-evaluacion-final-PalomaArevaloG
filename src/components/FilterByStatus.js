import '../styles/filter.scss';

const FilterByStatus = (props) => {
	return (
		<>
			<label className="form__header" htmlFor="status">
				Status
			</label>
			<div className="form__radio">
				<label className="form__radio-option" htmlFor="all">
					Todos
				</label>
				<input
					className="form__radio-input"
					type="radio"
					name="status"
					id="all"
					value="all"
					// {props.searchStatus}
					onChange={props.handleSearchStatus}
				/>
				<label className="form__radio-option" htmlFor="alive">
					Vivo
				</label>
				<input
					className="form__radio-input"
					type="radio"
					name="status"
					id="Alive"
					value="Alive"
					onChange={props.handleSearchStatus}
				/>
				<label className="form__radio-option" htmlFor="dead">
					Muerto
				</label>
				<input
					className="form__radio-input"
					type="radio"
					name="status"
					id="Dead"
					value="Dead"
					onChange={props.handleSearchStatus}
				/>
				<label className="form__radio-option" htmlFor="unknown">
					Desconocido
				</label>
				<input
					className="form__radio-input"
					type="radio"
					name="status"
					id="unknown"
					value="unknown"
					onChange={props.handleSearchStatus}
				/>
			</div>
		</>
	);
};
export default FilterByStatus;
