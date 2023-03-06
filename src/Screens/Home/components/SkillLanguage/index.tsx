import {Code} from 'phosphor-react';
import {Languages, SkillLanguageContainer} from './styles';

/* eslint-disable react/react-in-jsx-scope */
export function SkillLanguage() {
	return (
		<>
			<SkillLanguageContainer>
				<i> <Code size={35} /> </i>
				<div>
					<h3>Front-End</h3>
				</div>
				<Languages>
					<span>Lógica de Programação</span>
					<span>HTML5, CSS, JavaScript</span>
					<span>Estudando ReactJs</span>
					<span>Estudando TypeScript</span>
				</Languages>
			</SkillLanguageContainer>
			<SkillLanguageContainer>
				<i> <Code size={35} /> </i>
				<div>
					<h3>Back-end</h3>
				</div>
				<Languages>
					<span>Lógica de Programação</span>
					<span>JavaScript</span>
					<span>Express</span>
					<span>MySql</span>
					<span>Sequelize</span>
					<span>Estudando Prisma</span>
					<span>Estudando Nestjs</span>
					<span>Estudando Fastify</span>
					<span>API RESTFul</span>
				</Languages>
			</SkillLanguageContainer>
		</>
	);
}
