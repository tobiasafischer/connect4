import React, { useEffect, useState } from 'react'
import { useBoard } from '../../context'
import { Button, Modal, Row, useModal } from '../../shared'
import { Gameover } from '../Gameover'
import { Container, Title, Error, TitleContainer } from './Board.styled'

const Board: React.FC = () => {
   const { board, gameOver, player, invalidMove } = useBoard()
   const [isError, setIsError] = useState(false)
   const { toggle, isModalVisible } = useModal()

   useEffect(() => {
      if (gameOver) toggle()
   }, [gameOver])

   useEffect(() => {
      if (invalidMove) {
         setIsError(true)
         setTimeout(() => setIsError(false), 200)
      }
   }, [invalidMove])

   return (
      <Container>
         <TitleContainer>
            <span>
               <Title>You are</Title>
               <Title style={{ color: player === 1 ? '#ED3D3D' : '#6663FD' }}>
                  {player === 1 ? 'Red' : 'Blue'}
               </Title>
            </span>
            {invalidMove && <Error>Invalid Move</Error>}
         </TitleContainer>
         <table
            style={{
               transition: 'all 0.3s ease',
               transform: isError ? 'scale(1.15) rotate(5deg)' : '',
            }}
         >
            <tbody>
               {board.map((row, i) => (
                  <Row key={i} row={row} />
               ))}
            </tbody>
         </table>
         {isModalVisible && (
            <Modal>
               <Gameover toggle={toggle} />
            </Modal>
         )}
         {gameOver && !isModalVisible && <Button onClick={() => toggle()}>Show Endscreen</Button>}
      </Container>
   )
}
export default Board
