import React from 'react'
import { useBoard } from '../../context'
import { Row } from '../Row'

const Board: React.FC = () => {
   const { board } = useBoard()
   return (
      <table>
         <tbody>
            {board.map((row, i) => (
               <Row key={i} row={row} />
            ))}
         </tbody>
      </table>
   )
}
export default Board
