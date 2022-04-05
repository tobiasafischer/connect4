import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { TopBar } from '../routes/TopBar'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   position: relative;
   height: 100vh;
   width: 100vw;
   @media screen and (min-width: 768px) {
      align-items: center;
   }
`

const AuthRouterLayout: React.FC = () => (
   <Container>
      <TopBar />
      <Outlet />
   </Container>
)

export default AuthRouterLayout
