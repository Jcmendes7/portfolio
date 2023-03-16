/* eslint-disable @typescript-eslint/naming-convention */
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-200']};
    padding-top: 150px;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;

    webkit-font-smoothing: antialiased;
  }
`;
