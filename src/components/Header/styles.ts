/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 1.4rem 2rem;
  display: flex;
  justify-content: space-between;
`;

export const NavLink = styled.nav`
  display: none;

  @media(min-width: 768px) {
    display: block;
  }

  a {
    color: ${props => props.theme['gray-200']};
    padding:  0.5rem;
    text-decoration: none;
    color: ${props => props.theme.white};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${props => props.theme['rose-300']};
    }
  }
`;

export const LogoContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme['rose-300']};
  }
`;
