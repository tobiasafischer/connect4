import styled from 'styled-components'
import { Button } from '../../shared'

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 100px;
   width: 100%;
   height: 100%;
   ${Button} {
      width: 40%;
   }
`

export const Title = styled.h1`
   font-size: 84px;
   color: #333;
   font-weight: 500;
`