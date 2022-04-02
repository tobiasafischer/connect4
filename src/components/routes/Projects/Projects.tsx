import React from 'react'
import styled from 'styled-components'
import { Card, Crosswalk, Dubsado } from '../../shared'

const Container = styled.div`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   width: 100%;
   height: 100%;
`

const DubsadoContainer = styled.div`
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

const Projects: React.FC = ({ children }) => (
   // lol
   <Container>
      <Card
         url="https://www.dubsado.com/"
         icon={<Dubsado />}
         content={
            <DubsadoContainer>
               <h2>Dubsado, Burbank CA — Front-end Developer</h2>
               <p>
                  Acted as the primary front-end developer within my team for a login/signup page
                  used by a user base of 30k+
               </p>
               <p>
                  Laid the groundwork for rewriting the existing application into React from angular
               </p>
               <p>
                  Held an integral role in the planning and development of the application by
                  setting syntax, style guide, tech stack, and development processes Wrote extensive
                  documentation and tutorials for training new and existing employees
               </p>
               <p>
                  Was the first-point-of-contact for front-end related issues throughout the
                  codebase
               </p>
            </DubsadoContainer>
         }
      />
      <Card
         url="https://www.canva.com/design/DAE8q0jyS1A/kLNA_cUsiyYu1fWcdggl8g/view?utm_content=DAE8q0jyS1A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
         icon={<Crosswalk />}
         content={<p>cum circle</p>}
      />
   </Container>
)

export default Projects
