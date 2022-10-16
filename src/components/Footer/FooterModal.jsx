import React from 'react'
import {ModalTeam, StyledBackdrop} from './FooterModal.styled'
import { TeamContainer } from './FooterModal.styled';
import Team from './Team/Team';

const FooterModal = ({show}) => {
    if (!show) return null;
  return (
    <StyledBackdrop>
        <TeamContainer>
            <ModalTeam>
                <Team/>

            </ModalTeam>


        </TeamContainer>
    </StyledBackdrop>
  )
}

export default FooterModal