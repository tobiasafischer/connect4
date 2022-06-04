import React from 'react'
import styled from 'styled-components'
import { Tile } from '../Tile'

type Props = {
   row: any[]
}

const TR = styled.tr`
   display: flex;
   gap: 8px;
   margin-bottom: 8px;
`

const Row: React.FC<Props> = ({ row }) => (
   <TR>
      {row.map((cell, i) => (
         <Tile key={i} player={cell} col={i} />
      ))}
   </TR>
)

export default Row
