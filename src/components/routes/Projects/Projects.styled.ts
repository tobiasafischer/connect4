import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   width: 100%;
   height: 100%;
`

export const TextContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   flex-direction: column;
   width: 100%;
   height: 100%;
   gap: 20px;
   h2 {
      font-size: 25px;
   }
   p {
      font-size: 18px;
   }
`
