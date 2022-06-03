import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../AppRoutes'
import { useBoard } from '../../context'
import { Button } from '../../shared'
import { Container, Title } from './ChoosePlayer.styled'

const ChoosePlayer: React.FC = () => {
   const navigate = useNavigate()
   const { choosePlayer } = useBoard()

   const handlePlayer1 = () => {
      navigate(ROUTES.board)
      choosePlayer(1)
   }
   const handlePlayer2 = () => {
      navigate(ROUTES.board)
      choosePlayer(2)
   }

   return (
      <Container>
         <Title>Which color would you like?</Title>
         <Button onClick={handlePlayer1} style={{ borderColor: '#ED3D3D' }}>
            Red
         </Button>
         <Button onClick={handlePlayer2} style={{ borderColor: '#6663FD' }}>
            Blue
         </Button>
      </Container>
   )
}

export default ChoosePlayer
