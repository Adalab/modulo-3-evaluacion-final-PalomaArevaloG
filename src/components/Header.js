import logo from '../images/RickMortyLogo.png';
import '../styles/header.scss';
import '../styles/variables.scss';
const Header = () => {
	return (
		<header className="header">
			<img
				className="header_img"
				src={logo}
				title="Rick y Morty"
				alt="Rick y Morty"
			/>
		</header>
	);
};
export default Header;
