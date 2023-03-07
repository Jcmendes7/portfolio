/* eslint-disable react/react-in-jsx-scope */
import {HeaderContainer, LogoContainer, LogoEmail, NavLink} from './styles';
import logoImg from '../../assets/JC.svg';
import {MenuList} from '../MenuList';
import {EnvelopeSimple} from 'phosphor-react';

export function Header() {
	return (
		<HeaderContainer id='topo'>
			<LogoContainer >
				<img src={logoImg} alt='image do logo com as letras JC' />
				<span>mendes.com</span>
			</LogoContainer>

			<MenuList />

			<NavLink>
				<LogoEmail href='mailto:josecarlosms7f@gmail.com'>
					<EnvelopeSimple size={28} alt='' />
					CONTATO
				</LogoEmail>
				<a href='#sobre'>SOBRE</a>
				<a href='#projetos'>PROJETOS</a>
			</NavLink>
		</HeaderContainer>
	);
}
