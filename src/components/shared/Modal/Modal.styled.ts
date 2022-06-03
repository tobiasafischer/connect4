import styled from 'styled-components'

export const ModalContent = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   box-sizing: border-box;

   justify-content: center;
   position: relative;
   height: auto;
   height: fit-content;
   width: fit-content;
   padding: 0;
   border-radius: 10px;
   z-index: 99999;
   background-color: #fff;
   box-shadow: 6px 6px 20px rgb(0 0 0 / 25%);
   -webkit-box-shadow: 6px 6px 20px rgb(0 0 0 / 25%);
`

export const Background = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   background-color: #333;
   opacity: 0.5;
   z-index: 999;
`
export const ModalContainer = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   box-sizing: border-box;

   justify-content: center;
   position: absolute;
   height: 100%;
   width: 100%;
   top: 0;
   left: 0;
`
