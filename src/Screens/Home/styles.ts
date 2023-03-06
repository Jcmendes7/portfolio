/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const MainContainer = styled.main`
  padding: 2rem;
  flex: 1 0 auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  gap: 1rem;

  margin: 40px 0 100px;
`;

export const TitleMyName = styled.a`
  text-decoration: none;
  color: ${props => props.theme['rose-300']};
  letter-spacing: 1px;

  &:hover {
    color: ${props => props.theme['rose-500']};
  }
`;

export const Title_h1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.6;

  @media(min-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const SessionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SessionJobs = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 2rem;

  @media(min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media(min-width:600px) {
    flex-direction: row;
    
  }
`;

export const ProfileImg = styled.div`
  width: 100%;
  border: 1px solid ${props => props.theme['gray-800']};
  box-shadow: 0px 0px 10px -2px  ${props => props.theme['rose-300']};

  @media(min-width: 600px) {
    width: 250px;
    height: 250px;
  }



  img {
    width: 100%;
  }
`;

export const Title_About = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media(min-width: 600px) {
    width: 100%;
    flex: 1;
  }

  @media(min-width: 768px) {
    font-size: 1.2rem;
  }
`;
