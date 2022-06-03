import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../AppRoutes'
import { Button } from '../../shared'
import { Container, Title } from './Welcome.styled'

const Welcome: React.FC = () => {
   const navigate = useNavigate()

   return (
      <Container>
         <Title>Welcome to Connect 4</Title>
         <Button onClick={() => navigate(ROUTES.choosePlayer)}>Click here to continue</Button>
      </Container>
   )
}

export default Welcome
