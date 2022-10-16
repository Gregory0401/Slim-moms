import React from 'react'
import {ModalTeam, StyledBackdrop,CloseFooterButton} from './FooterModal.styled'
import { TeamContainer } from './FooterModal.styled';
import Team from './Team/Team';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';



const FooterModal = ({show, onClose}) => {
        useEffect(() => {
        window.addEventListener('keydown', handleEscape);
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
    
        return () => {
          window.removeEventListener('keydown', handleEscape);
          window.removeEventListener('click', handleButtonClick);
          const body = document.querySelector('body');
          body.style.overflow = 'auto';
        };
      });
    
      const handleEscape = e => {
        if (e.code === 'Escape') {
          onClose();
        }
      };
    
      const handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
    
      const handleButtonClick = e => {
        if (e.target.tagName === 'BUTTON') {
          onClose();
        }
      };

      if (!show) return null;


  return (
    <StyledBackdrop onClick={handleBackdropClick}>
        <TeamContainer>
            <ModalTeam>
                <Team/>
                <CloseFooterButton onClick={onClose}><XMarkIcon/></CloseFooterButton>
            </ModalTeam>


        </TeamContainer>
    </StyledBackdrop>
  )
}

export default FooterModal