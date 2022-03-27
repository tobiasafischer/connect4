import { createGlobalStyle } from 'styled-components'

// dark: #140841;
// red: #f7263f;
// white: #e8e6ea;

const GlobalStyle = createGlobalStyle`
html,
body {
  background-color: #e3e2de;
  font-size: 14px;
  -webkit-font-smoothing: antialiased; 

  color: #2c211a;
  margin: 0;
  overflow: hidden;
}

html {
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  font-family: 'League Spartan', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
a,
p {
  margin: 0;    
  padding: 0;
}

h2 {
  font-weight: 600;
  font-size: 20px;
  color: #c31c3f;
}

p {
  font-weight: 400;
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

button,
a {
  cursor: pointer;
}

input {
  font-weight: 500;
  size: 14px;
  color: #292e35;
  width: 100%;
  border-radius: 2px;
  padding-left: 12px;
}
 `

export default GlobalStyle
