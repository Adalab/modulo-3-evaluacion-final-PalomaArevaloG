import { Link } from 'react-router-dom';

import NotFound from './NotFound';
import '../styles/characterdetail.scss';
import '../styles/variables.scss';
const CharacterDetail = (props) => {
	const iconStatus = () => {
		if (props.character.status === 'Dead') {
			return <i className="fas fa-skull"></i>;
		} else if (props.character.status === 'Alive') {
			return <i className="fas  fa-heartbeat"></i>;
		} else {
			return <i class="fas fa-question-circle"></i>;
		}
	};
	// console.log('detail', props);
	if (props.character !== undefined) {
		return (
			<section className="characterDetail">
				<ul className="listDetail">
					<li>
						<img
							className="img__detail"
							src={props.character.image}
							alt={props.character.name}
						/>
					</li>
					<li>
						<strong>Nombre:</strong> {props.character.name}
					</li>
					<li>
						<strong>Especie:</strong> {props.character.specie}
					</li>
					<li>Planeta de origen: {props.character.planet}</li>
					<li>
						<strong>Número de episodios en los que aparece:</strong>
						{props.character.episodes}
					</li>
					<li>
						<strong>¿Está vivo?: </strong> {iconStatus()}
					</li>
					<li>
						<Link to="/">
							<button className="btn__back">Volver atrás</button>
						</Link>
					</li>
				</ul>
			</section>
		);
	} else {
		return <NotFound />;
	}
};

export default CharacterDetail;
