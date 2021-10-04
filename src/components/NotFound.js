import { Link } from 'react-router-dom';
import '../styles/notfound.scss';
import '../styles/variables.scss';
const NotFound = () => {
	return (
		<>
			<p className="notFoundPage">Página no encontrada.</p>
			<Link to="/">
				<p>Recargamos página</p>
			</Link>
		</>
	);
};
export default NotFound;
