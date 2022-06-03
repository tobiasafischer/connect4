import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../AppRoutes'
import { useBoard } from '../../context'
import { Button } from '../../shared'
import { Container, Title, TitleContainer, ButtonContainer, GameStatus } from './Gameover.styled'

type Props = {
   toggle: () => void
}

const Gameover: React.FC<Props> = ({ toggle }) => {
   const { message, reset } = useBoard()
   const navigate = useNavigate()

   const handlePlayAgain = () => {
      toggle()
      reset()
      navigate(ROUTES.choosePlayer)
   }

   const handleReturn = () => {
      toggle()
      reset()
      navigate(ROUTES.welcome)
   }

   return (
      <Container>
         <TitleContainer>
            <Title>Game Over</Title>
            <GameStatus>{message}</GameStatus>
         </TitleContainer>
         <ButtonContainer>
            <Button style={{ width: '100%' }} onClick={handlePlayAgain}>
               Play Again?
            </Button>
            <Button style={{ width: '100%' }} onClick={handleReturn}>
               Return to title screen
            </Button>
         </ButtonContainer>
      </Container>
   )
}
export default Gameover
