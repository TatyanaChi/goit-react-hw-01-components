import 'modern-normalize';
import { Global, css } from '@emotion/react';


export const GlobalStyles = () => {
    return (
<Global 
styles={css`
    :root {
        --black: #000;
        --white: #fff;
        --grey: #787878;
        --aqua: #25b0d3;
        --background-grey: #f0f0f0;
    }

    body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, 
h2, 
h3,
h4, 
p,
ul {
    margin: 0;
    padding: 0;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

ul,
li {
list-style: none;
text-decoration: none;
}

a {
    text-decoration: none;
    cursor: pointer;
    }
`}
   /> );
};
