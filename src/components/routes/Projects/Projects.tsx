import React from 'react'
import { Card, Crosswalk, Dubsado } from '../../shared'
import { Container, TextContainer } from './Projects.styled'

const Projects: React.FC = () => (
   <Container>
      <Card
         url="https://www.dubsado.com/"
         icon={<Dubsado />}
         content={
            <TextContainer>
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
            </TextContainer>
         }
      />
      <Card
         url="https://www.canva.com/design/DAE8q0jyS1A/kLNA_cUsiyYu1fWcdggl8g/view?utm_content=DAE8q0jyS1A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
         icon={<Crosswalk />}
         content={
            <TextContainer>
               <h2>Crosswalk, Hackathon - Front-end Developer</h2>
               <p>
                  Crosswalk is a capacitorjs / React mobile application which is Twitter meets
                  Pokemon go.
               </p>
               <p>
                  Discover new places at any time by adventuring the city with real-time gps
                  tracking and come accross other user&apos;s messages placed.
               </p>
               <p>
                  This was created within 48 hours as apart of a company wide hackathon. We worked
                  as a team of 6 where I acted as a Front-end Developer mainly producing all visual
                  components on the application.
               </p>
               <p>We won the &quot;Technical Excellence&quot; prize category</p>
            </TextContainer>
         }
      />
   </Container>
)

export default Projects
