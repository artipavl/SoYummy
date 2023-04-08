import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif; */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #23262a;

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