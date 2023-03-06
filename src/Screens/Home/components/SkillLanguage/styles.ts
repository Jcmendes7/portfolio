/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const SkillLanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0px 0px 10px -2px  ${props => props.theme['rose-300']};
  padding: 10px 0;
  border-radius: 8px;

  svg{
    color: ${props => props.theme['rose-300']};
  }

`;

export const Languages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
