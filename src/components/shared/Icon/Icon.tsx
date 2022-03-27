import React from 'react'
import styled from 'styled-components'

type Props = {
   icon: string
   size?: string
   color?: string
   outlined?: boolean
   hoverColor?: string
}

const Span = styled.span<Pick<Props, 'size' | 'color' | 'hoverColor'>>`
   color: ${({ color }) => color} !important;
   font-size: ${({ size }) => size};
   &:hover {
      ${({ hoverColor }) => hoverColor !== '' && `color: ${hoverColor} !important;`}
   }
`

const Icon: React.FC<Props> = ({
   icon,
   size = '24px',
   color = '#2c211a',
   outlined = true,
   hoverColor = '',
}) => (
   <Span
      id="icon"
      size={size}
      color={color}
      hoverColor={hoverColor}
      className={`material-icons${outlined ? '-outlined' : ''}`}
   >
      {icon}
   </Span>
)

export default Icon
