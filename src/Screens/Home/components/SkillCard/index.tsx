/* eslint-disable react/react-in-jsx-scope */
import {GraduationCap} from 'phosphor-react';
import {CoursesContainer, SkillCardContainer, TitleGraduationContainer, TitleSkillCard} from './styles';
export function SkillCard() {
	return (
		<>
			<SkillCardContainer>
				<i> <GraduationCap size={35}/> </i>
				<CoursesContainer>
					<TitleGraduationContainer>
						<TitleSkillCard>Analise e Desenvolvimento de Sistemas</TitleSkillCard>
						<p>Início: Fevereiro de 2022</p>
						<p>Término: Julho de 2024</p>
						<p>Instituição: Unicesumar</p>
					</TitleGraduationContainer>
					<TitleGraduationContainer>
						<TitleSkillCard>Desenvolvedor web Full Stack</TitleSkillCard>
						<p>Início: Agosto de 2022</p>
						<p>Término: fevereiro de 2023</p>
						<p>Instituição: Digital House</p>
					</TitleGraduationContainer>
				</CoursesContainer>
			</SkillCardContainer>
		</>
	);
}
