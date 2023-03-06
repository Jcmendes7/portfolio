/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const ButtonListMenu = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  color: ${props => props.theme['rose-300']};

  @media(min-width: 768px) {
    display: none;
  }
`;
