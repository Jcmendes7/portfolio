/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const SkillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px -2px  ${props => props.theme['rose-300']};
  gap: 0.5rem;
  padding: 10px 0;
  border-radius: 8px;

  svg{
    color: ${props => props.theme['rose-300']};
  }
`;

export const TitleSkillCard = styled.h3`
  line-height: 1.4;
`;

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const TitleGraduationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: ${props => props.theme['gray-200']};
  }
`;
