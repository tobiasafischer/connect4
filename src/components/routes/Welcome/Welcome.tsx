import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { ROUTES } from '../../../AppRoutes'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 100px;
   width: 100%;
   height: 100%;
   padding: 150px 0px;
`

const Title = styled.h1`
   font-size: 84px;
   color: #333;
   font-weight: 500;
`

const Continue = styled(animated.button)`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: transparent;
   padding: 25px 55px;
   font-size: 30px;
   color: #333;
   border: 2px solid #333;
   border-radius: 4px;
   &:hover {
      color: rgba(51, 51, 51, 0.75);
   }
`

const Welcome: React.FC = () => {
   const navigate = useNavigate()
   const style = useSpring({
      loop: true,
      to: [{ borderColor: 'rgba(51, 51, 51, 1)' }, { borderColor: 'rgba(51, 51, 51, 0.5)' }],
      from: { borderColor: 'rgba(51, 51, 51, 0.5)' },
   })
   return (
      <Container>
         <Title>Welcome to Connect 4</Title>
         <Continue style={style} onClick={() => navigate(ROUTES.choosePlayer)}>
            Click here to continue
         </Continue>
      </Container>
   )
}

export default Welcome
