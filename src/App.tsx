import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import { AppRoutes } from './AppRoutes'
import { BoardProvider } from './components/context'
import { useMediaQuery } from './hooks'
import './app.css'

const Container = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   width: 100%;
   height: 100%;
   padding: 50px;
`
const App = () => (
   <Container>
      <Router>
         <BoardProvider>
            <AppRoutes />
         </BoardProvider>
      </Router>
   </Container>
)

export default App
