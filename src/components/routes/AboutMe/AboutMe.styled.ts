import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   width: 100%;
   height: 100%;
`

export const TextContainer = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   text-align: left;
   width: 40%;
   margin-left: 10%;
   h2 {
      font-size: 9rem;
      margin-left: -2px;
   }
   & > h2:first-child {
      margin: 0;
   }
   p {
      font-weight: 400;
      font-size: 3rem;
      line-height: 50px;
      margin-top: 10px;
      span {
         color: #ef4444;
      }
   }
`

export const IconContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 30px;
   width: 50%;
   height: 100%;
`

export const Language = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 20px;
   width: 100%;
   height: 10%;
   svg {
      height: 100px;
   }
`
