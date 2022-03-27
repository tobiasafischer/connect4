import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import { AppRoutes } from './components/routing'
import GlobalStyle from './global'

const Container = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   width: 100%;
   height: 100%;
`
function App() {
   return (
      <Container>
         <Router>
            <AppRoutes />
         </Router>
         <GlobalStyle />
      </Container>
   )
}

export default App
