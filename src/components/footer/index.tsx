/* eslint-disable react/react-in-jsx-scope */
import {
	FacebookLogo,
	GithubLogo,
	InstagramLogo,
	LinkedinLogo} from 'phosphor-react';
import {
	FooterContainer,
	FooterEmpresa,
	FooterNavLink,
	FooterNavLinkSocialMedia,
	LogoBlue,
	LogoFooter,
	LogoRed} from './styles';
import logoImg from './img/JCLogo.svg';

export function Footer() {
	return (
		<FooterContainer>
			<FooterEmpresa>
				<h3>Empresa</h3>
				<FooterNavLink>
					<a href='#sobre'>Sobre</a>
					<a href='#projetos'>Projetos</a>
					<LogoFooter href='#topo'> <img src={logoImg} alt='' /> </LogoFooter>
				</FooterNavLink>
			</FooterEmpresa>

			<FooterEmpresa>
				<h3>Termos</h3>
				<FooterNavLink>
					<a href=''>Termos e condições de uso</a>
					<a href=''>Termos de privacidade</a>
				</FooterNavLink>
			</FooterEmpresa>

			<FooterEmpresa>
				<h3>Nos siga nas redes sociais</h3>
				<FooterNavLinkSocialMedia>
					<LogoBlue href=''>
						<FacebookLogo size={28} alt='logo Facebook com link que leva para a pagina' />
					</LogoBlue>
					<LogoRed href=''>
						<InstagramLogo size={28} alt='logo Instragram com link que leva para a pagina' />
					</LogoRed>
					<LogoBlue href='https://www.linkedin.com/in/jcmendes7/' target='_blank' rel='noreferrer'>
						<LinkedinLogo size={28} alt='logo Linkedin com link que leva para a pagina' />
					</LogoBlue>
					<LogoRed href='https://github.com/Jcmendes7' target='_blank' rel='noreferrer' >
						<GithubLogo size={28} alt='logo Pinterest com link que leva para a pagina' />
					</LogoRed>

				</FooterNavLinkSocialMedia>
			</FooterEmpresa>
		</FooterContainer>
	);
}
