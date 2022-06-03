import styled from 'styled-components'
import { Button } from '../../shared'

export const Container = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 50px;
   width: 100%;
   padding: 125px;
   border-radius: 4px;
   & > ${Button} {
      position: absolute;
      bottom: 20px;
      right: 20px;
      font-size: 16px;
      padding: 15px 35px;
   }
`

export const Title = styled.h1`
   font-size: 84px;
   color: #333;
   font-weight: 500;
`

export const GameStatus = styled.h2`
   font-size: 36px;
   color: #333;
   font-weight: 300;
`

export const ButtonContainer = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 20px;
   width: 100%;
   ${Button} {
      width: 100%;
   }
`

export const TitleContainer = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 20px;
   width: 100%;
`
