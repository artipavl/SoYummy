import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';


export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Poppins'
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue','Poppins',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #23262a;
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
  margin: 0;
}
    ul,
    ol {
  margin: 0;
  padding: 0;
}
    li {
  list-style: none;
}
    img {
  display: block;
  max-width: 100%;
  height: auto;
}

    a {
  display: block;
  text-decoration: none;
  cursor: pointer;
}

    button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}

    address {
  font-style: normal;
}
`
