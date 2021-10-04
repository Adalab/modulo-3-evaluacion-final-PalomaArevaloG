import { Link } from 'react-router-dom';
import alive from '../images/alive.png';
import dead from '../images/dead.png';
import NotFound from './NotFound';
import '../styles/characterdetail.scss';
import '../styles/variables.scss';
const CharacterDetail = (props) => {
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
					<li>Nombre: {props.character.name}</li>
					<li>Especie: {props.character.specie}</li>
					<li>Planeta de origen: {props.character.planet}</li>
					<li>
						Número de episodios en los que aparece:
						{props.character.episodes}
					</li>
					<li>
						¿Está vivo?{' '}
						{props.character.status === 'Alive' ? (
							<img
								className="alive_img icon"
								src={alive}
								title="alive"
								alt="alive"
							/>
						) : (
							<img
								className="dead_img icon"
								src={dead}
								title="dead"
								alt="dead"
							/>
						)}
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
