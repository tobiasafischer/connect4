import styled from 'styled-components'
import { Button } from '../../shared'

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 100%;
   width: 100%;
   position: relative;
   & > ${Button} {
      position: absolute;
      bottom: 20px;
      right: 20px;
   }
`

export const Title = styled.span`
   font-size: 72px;
   color: #333;
   margin-right: 15px;
`

export const Error = styled.h2`
   font-size: 24px;
   color: #ed3d3d;
`

export const TitleContainer = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 12px;
   position: absolute;
   top: 75px;
`
