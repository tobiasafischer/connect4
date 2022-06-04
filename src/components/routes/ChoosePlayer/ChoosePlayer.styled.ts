import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 100px;
   width: 100%;
   height: 100%;
   button {
      width: 40%;
   }
   @media (max-width: 768px) {
      button {
         width: 100%;
      }
      font-size: 60px;
      line-height: 80px;
   }
`

export const Title = styled.h1`
   font-size: 84px;
   color: #333;
   font-weight: 500;
   text-align: center;
   @media (max-width: 768px) {
      font-size: 40px;
      line-height: 60px;
   }
`
