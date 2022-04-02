import { animated } from 'react-spring'
import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
   & > * {
      z-index: 1;
   }
`

export const InnerContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   height: 50%;
   width: 100%;
`

export const TextContainer = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   text-align: left;
   width: 100%;
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
      font-size: 4rem;
   }
`

export const Image = styled.img`
   border-radius: 15%;
   box-shadow: 5px 5px 20px rgb(0, 0, 0, 0.3);
   margin-right: 15%;
   height: 100%;
`

export const OrganicShape = styled.div`
   z-index: 0;
   position: absolute;
   display: block;
   width: 50%;
   height: 85%;
   right: 5%;
   background: #dc2626;
   border-radius: 41% 59% 41% 59% / 43% 45% 55% 57%;
   animation-name: organic;
   animation-duration: 30s;
   animation-iteration-count: infinite;

   @keyframes organic {
      0% {
         border-radius: 41% 59% 41% 59% / 43% 45% 55% 57%;
      }
      33% {
         border-radius: 30% 70% 30% 70% / 32% 30% 70% 68%;
      }
      66% {
         border-radius: 70% 30% 70% 30% / 68% 70% 30% 32%;
      }
      100% {
         border-radius: 41% 59% 41% 59% / 43% 45% 55% 57%;
      }
   }
`

export const IconContainer = styled(animated.div)`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 5px;
   position: absolute;
   bottom: 35px;
   cursor: pointer;
   p {
      font-weight: 600;
   }
   &:hover {
      transform: translateY(3px);
   }
`
