import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    :focus {
        outline: 0;
        //box-shadow: 0 0 0 .2rem ${(props) => props.theme['']};
    }

    body {
        background-color: ${(props) => props.theme['white-200']};
        -webkit-font-smoothing: antialiased;
    }

    body, input-security, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    .scrollbar::-webkit-scrollbar {
        width: 4px;
    }

    .scrollbar::-webkit-scrollbar-thumb {
        background: gray;
    }

    .scrollbar::-webkit-scrollbar-thumb:hover {
        background: green;
    }
`
