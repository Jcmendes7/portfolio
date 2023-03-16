import {AboutContainer, MainContainer, ProfileImg, SessionContainer, SessionJobs, TitleContainer, TitleMyName, Title_About, Title_h1} from './styles';
import {SkillCard} from './components/SkillCard';
import {SkillLanguage} from './components/SkillLanguage';
import {MyJobs} from './components/Jobs';
import {jobs} from './components/Jobs/jobs';
import {ViewJobs} from './components/Jobs/styles';
import imageProfile from './img/perfil.png';

/* eslint-disable react/react-in-jsx-scope */
export function Home() {
	return (
		<MainContainer>

			<TitleContainer>
				<p>
					<TitleMyName id='sobre' href=''>OLÁ, MEU NOME É JOSE CARLOS</TitleMyName>
				</p>
				<div>
					<Title_h1>Eu desenvolvo webSites e amo o que faço.</Title_h1>
				</div>
				<AboutContainer>
					<ProfileImg>
						<img src={imageProfile} alt='' />
					</ProfileImg>

					<Title_About >
						Desde que comecei minha jornada como desenvolvedor web em 2022 na
						faculdade, fiz vários cursos para reforçar meus conhecimentos.

						<p>
						Tornei-me um desenvolvedor Full Stack na Digital House, onde
						participei de um projeto real de e-commerce e conheci pessoas
						incríveis que me fizeram entender que programação não é apenas código,
						e que o trabalho em equipe é a base mais sólida. Esse curso já foi
						finalizado, mas a busca por conhecimento ainda não.
						</p>

						<p>
						Atualmente,
						estou estudando ReactJS na Rocketseat e Análise e Desenvolvimento
						de Sistemas na Unicesumar
						</p>

					</Title_About>

				</AboutContainer>
			</TitleContainer>

			<SessionContainer>
				<SkillCard />
				<SkillLanguage />
			</SessionContainer>
			<ViewJobs id='projetos'>
				<h3>Aqui você pode conferir alguns dos trabalhos pessoais que realizei</h3>
			</ViewJobs>
			<SessionJobs>

				{jobs.map(myjobs => (
					<MyJobs
						key={myjobs.title}
						title={myjobs.title}
						image={myjobs.image}
						linkGitHub={myjobs.linkGitHub}
						linkWebSite={myjobs.linkWebSite}
					/>
				))}

			</SessionJobs>
		</MainContainer>
	);
}
