import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useBoard } from '../../context'
import { Modal, Row, useModal } from '../../shared'
import { Gameover } from '../Gameover'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 100%;
   width: 100%;
   position: relative;
`
const Title = styled.h1`
   font-size: 72px;
   color: #333;
   position: absolute;
   top: 75px;
`

const Board: React.FC = () => {
   const { board, gameOver, player } = useBoard()
   const { toggle, isModalVisible } = useModal()

   useEffect(() => {
      if (gameOver) toggle()
   }, [gameOver])

   return (
      <Container>
         <Title>{`You are ${player === 1 ? 'Red' : 'Blue'}`}</Title>
         <table>
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
      </Container>
   )
}
export default Board
