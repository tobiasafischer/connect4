import React from 'react'
import { useSpring } from 'react-spring'
import { Icon } from '../../shared/Icon'
import { Container, TextContainer, Image, OrganicShape, IconContainer } from './Home.styled'

const Home: React.FC = () => {
   const style = useSpring({
      to: { opacity: 1, y: 0 },
      from: { opacity: 0, y: -10 },
      config: { duration: 750 },
   })

   return (
      <Container>
         <TextContainer>
            <h2>Tobias</h2>
            <h2>Fischer</h2>
            <p>FRONTEND DEVELOPER</p>
         </TextContainer>
         <Image src="https://firebasestorage.googleapis.com/v0/b/portolfio.appspot.com/o/PXL_20220311_173105326.jpg?alt=media&token=2a3418a1-977a-4ff4-ac1e-a424ccae3af7" />
         <OrganicShape />
         <IconContainer style={style}>
            <p>SEE MORE</p>
            <Icon icon="south" size="25px" />
         </IconContainer>
      </Container>
   )
}
export default Home
