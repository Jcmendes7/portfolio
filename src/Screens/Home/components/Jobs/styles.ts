/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const JobsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px -2px  ${props => props.theme['rose-300']};
  border-radius: 8px;
  padding: 5px;

  @media(min-width:768px) {
    max-width: 19rem;
    max-height: 28rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ViewJobs = styled.div`
  margin: 40px 0 20px;
`;

export const ImageCard = styled.div`
  height: 100%;
  width: 100%;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  a{
    text-decoration: none;
    color: ${props => props.theme.white};
    background: ${props => props.theme['gray-800']};
    padding: 0.3rem;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    border-radius: 8px;

    @media(min-width:400px) {
      padding: 0.5rem;
    }
  }
`;

export const LogoGitHub = styled.i`
  color: ${props => props.theme['rose-500']};
  padding: 0 8px;
`;

export const LogoWebSite = styled.i`
  color: ${props => props.theme['blue-500']};
  padding: 0 8px;
`;
