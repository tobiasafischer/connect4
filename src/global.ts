import { createGlobalStyle } from 'styled-components'

// dark: #140841;
// red: #f7263f;
// white: #e8e6ea;

const GlobalStyle = createGlobalStyle`
html,
body {
  background-color: #262626;
  font-size: 14px;
  -webkit-font-smoothing: antialiased; 

  color: #f3f4f6;
  margin: 0;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  height: 100%;

}

html {
  box-sizing: border-box;
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
  color: #dc2626;
}

p {
  font-weight: 400;
}

a {
  color: #f3f4f6;
  font-size: 20px;
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
