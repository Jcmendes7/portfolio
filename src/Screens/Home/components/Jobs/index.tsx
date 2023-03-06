/* eslint-disable react/react-in-jsx-scope */
import {GithubLogo, Globe} from 'phosphor-react';
import {ImageCard, JobsCardContainer, Links, LogoGitHub, LogoWebSite} from './styles';

type Jobs = {
	title: string;
	image: string;
	linkGitHub: string;
	linkWebSite: string;
};

export function MyJobs({title, image, linkGitHub, linkWebSite}: Jobs) {
	return (
		<JobsCardContainer>
			<div>
				<h4> {title} </h4>
			</div>
			<ImageCard>
				<img src={image} alt='' />
			</ImageCard>
			<Links>
				<a href={linkGitHub} target='_blank' rel='noreferrer' >
					<LogoGitHub> <GithubLogo size={25} /> </LogoGitHub>
          Repositório
				</a>
				<a href={linkWebSite} target='_blank' rel='noreferrer'>
					<LogoWebSite> <Globe size={25} /> </LogoWebSite>
          WebSite
				</a>
			</Links>
		</JobsCardContainer>
	);
}
