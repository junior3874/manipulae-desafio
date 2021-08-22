import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body, html, * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    }

    body{
        padding: 0 1rem;
        scroll-behavior: smooth;
    }
`;
