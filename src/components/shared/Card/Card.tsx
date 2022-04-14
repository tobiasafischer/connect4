import React from 'react'

import styled from 'styled-components'

const Face = styled.div`
   width: 600px;
   height: 400px;
   transition: 0.5s;
   border-radius: 5px;
`

const Cover = styled(Face)`
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   background: #dc2626;
   z-index: 1;
   transform: translateY(200px);
   &:hover {
      transform: translateY(0px);
   }
`

const CardContent = styled(Face)`
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   padding: 20px;

   background: #e5e5e5;
   color: #333;
   box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
   transform: translateY(-200px);
`

const Content = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   height: 100%;

   opacity: 1;
   transition: 0.5s;
   border-radius: 5px;
`

const Container = styled.div`
   position: relative;
   border-radius: 10px;

   &:hover {
      ${Cover}, ${CardContent} {
         transform: translateY(0);
      }
      ${Cover} {
         background: #525252;

         border-radius: 5px 5px 0px 0px;
      }
      ${CardContent} {
         border-radius: 0px 0px 5px 5px;
      }
   }
`

const Link = styled.a`
   &,
   &:hover {
      text-decoration: none;
   }
`

type Props = {
   icon: React.ReactNode
   content: React.ReactNode
   url: string
}

const Card: React.FC<Props> = ({ icon, content, url }) => (
   <Link href={url} target="_blank" rel="noopener noreferrer">
      <Container>
         <Cover>
            <Content>
               <div className="icon">{icon}</div>
            </Content>
         </Cover>
         <CardContent>
            <Content>{content}</Content>
         </CardContent>
      </Container>
   </Link>
)
export default Card
