/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme['gray-800']};
  padding: 2rem;
  gap: 1rem;
`;
export const FooterEmpresa = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
`;
export const FooterNavLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  a {
    text-decoration: none;
    color: ${props => props.theme['gray-200']};
    font-size: 0.875rem;

    &:hover {
      color: ${props => props.theme['rose-300']};
    }
  }

`;

export const FooterNavLinkSocialMedia = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  a {
    text-decoration: none;
    color: ${props => props.theme['gray-200']};
    font-size: 0.875rem;
    transition: all 200ms;
  }
`;

export const LogoBlue = styled.a`
  &:hover {
    color: ${props => props.theme['blue-500']};
  }
`;

export const LogoRed = styled.a`
  &:hover {
    color: ${props => props.theme['rose-300']};
  }
`;

export const LogoFooter = styled.a`
  display: flex;
  align-items: center;

  img {
    width: 30px;
  }
`;

