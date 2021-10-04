import { Link } from 'react-router-dom';

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
