import React from 'react'
import styled from 'styled-components'
import { useBoard } from '../../context'

const Cell = styled.td<{ player: 0 | 1 | 2; hovered: boolean }>`
   background-color: ${({ player }) =>
      player === 0 ? 'white' : player === 1 ? '#ED3D3D' : '#6663FD'};
   border-radius: 50%;
   height: 100px;
   width: 100px;
   transition: background-color 0.5s;
   transition: transform 0.4s;
   @media (max-width: 768px) {
      height: 75px;
      width: 75px;
   }
   @media (min-width: 768px) {
      ${({ hovered }) => hovered && 'transform: scale(1.05);'}
   }
`

type Props = {
   player: 0 | 1 | 2
   col: number
}

const Tile: React.FC<Props> = ({ player, col }) => {
   const { play, handleMouseEnter, handleMouseLeave, hovered } = useBoard()
   return (
      <Cell
         onMouseEnter={() => handleMouseEnter(col)}
         onMouseLeave={handleMouseLeave}
         player={player}
         hovered={hovered === col}
         onClick={() => play(col)}
      />
   )
}

export default Tile
