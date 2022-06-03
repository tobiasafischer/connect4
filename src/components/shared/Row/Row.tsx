import React from 'react'
import styled from 'styled-components'
import { Tile } from '../Tile'

type Props = {
   row: any[]
}

const TR = styled.tr`
   display: flex;
   gap: 5px;
   margin-bottom: 5px;
`

const Row: React.FC<Props> = ({ row }) => (
   <TR>
      {row.map((cell, i) => (
         <Tile key={i} player={cell} col={i} />
      ))}
   </TR>
)

export default Row
