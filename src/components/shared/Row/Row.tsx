import React from 'react'
import { Tile } from '../Tile'

type Props = {
   row: any[]
}

const Row: React.FC<Props> = ({ row }) => (
   <tr>
      {row.map((cell, i) => (
         <Tile key={i} player={cell} col={i} />
      ))}
   </tr>
)

export default Row
