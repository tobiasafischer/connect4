import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   position: fixed;
   gap: 20px;
   width: 100%;
   height: 5%;

   top: 0;
   padding: 0px 1%;
   p {
      font-size: 25px;
      font-weight: 300;
      text-transform: lowercase;
   }
`

const TopBar: React.FC = () => (
   <Container>
      <p>HOME</p>
      <p>ABOUT</p>
      <p>WORK</p>
      <p>CONTACT</p>
   </Container>
)

export default TopBar
