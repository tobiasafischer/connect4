import React from 'react'
import ReactDOM from 'react-dom'
import { Background, ModalContainer, ModalContent } from './Modal.styled'

const Modal: React.FC = ({ children }) =>
   ReactDOM.createPortal(
      <div id="modal">
         <ModalContainer>
            <ModalContent>{children}</ModalContent>
            <Background />
         </ModalContainer>
      </div>,
      document.body,
   )

export default Modal
