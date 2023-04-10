import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'League Spartan', sans-serif;
  background-color: ${props => props.theme.colors['cyan-1']};
  color: ${props => props.theme.colors['cyan-3']}
}

`