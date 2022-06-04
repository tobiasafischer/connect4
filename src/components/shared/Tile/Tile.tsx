import React from 'react'
import styled from 'styled-components'
import { useBoard } from '../../context'

const Cell = styled.td<{ player: 0 | 1 | 2 }>`
   background-color: ${({ player }) =>
      player === 0 ? 'white' : player === 1 ? '#ED3D3D' : '#6663FD'};
   border-radius: 50%;
   height: 100px;
   width: 100px;
   transition: background-color 0.5s;
   @media (max-width: 768px) {
      height: 75px;
      width: 75px;
   }
`

type Props = {
   player: 0 | 1 | 2
   col: number
}

const Tile: React.FC<Props> = ({ player, col }) => {
   const { play } = useBoard()
   return <Cell player={player} onClick={() => play(col)} />
}

export default Tile
