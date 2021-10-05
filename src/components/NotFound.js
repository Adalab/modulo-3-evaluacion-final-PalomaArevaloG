import { Link } from 'react-router-dom';
import '../styles/notfound.scss';
import '../styles/variables.scss';
import notfound from '../images/notfound.png';
const NotFound = () => {
	return (
		<>
			<Link to="/">
				<p className="msg-error">
					El personaje que buscas no existe. Pulsa el portal para
					volver
				</p>
				<img
					className="img-error"
					src={notfound}
					title="Volver"
					alt="Volver"
				/>
			</Link>
		</>
	);
};
export default NotFound;
