/* eslint-disable react/react-in-jsx-scope */
import {HeaderContainer, LogoContainer, NavLink} from './styles';
import logoImg from '../../assets/JC.svg';
import {MenuList} from '../MenuList';

export function Header() {
	return (
		<HeaderContainer id='topo'>
			<LogoContainer >
				<img src={logoImg} alt='image do logo com as letras JC' />
				<span>mendes.com</span>
			</LogoContainer>

			<MenuList />

			<NavLink>
				<a href='#sobre'>SOBRE</a>
				<a href='#projetos'>PROJETOS</a>
			</NavLink>
		</HeaderContainer>
	);
}
