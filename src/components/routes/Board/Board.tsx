import React from 'react'
import styled from 'styled-components'
import { useBoard } from '../../context'
import { Row } from '../../shared/Row'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
`

const Board: React.FC = () => {
   const { board } = useBoard()
   return (
      <Container>
         <table>
            <tbody>
               {board.map((row, i) => (
                  <>
                     <Row key={i} row={row} />
                  </>
               ))}
            </tbody>
         </table>
      </Container>
   )
}
export default Board
