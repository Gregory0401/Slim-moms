import React from 'react';
import robot from 'img/2555.png';
import { StyledImage, TeamItem,TeamContainer} from './Team.styled';

const Team = () => {
  return (
    <div>
      <TeamContainer>
        <TeamItem>
        <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >   <StyledImage src={robot} alt="" /></a>
       
          <h2>Name</h2>
          <p>Senior developer</p>
        </TeamItem>
        <TeamItem>
          <StyledImage src={robot} alt="" />
          <h2>Name</h2>
          <p>Senior developer</p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          ></a>
        </TeamItem>
        <TeamItem>
          <StyledImage src={robot} alt="" />
          <h2>Name</h2>
          <p>Senior developer</p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          ></a>
        </TeamItem>
        <TeamItem>
          <StyledImage src={robot} alt="" />
          <h2>Name</h2>
          <p>Senior developer</p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          ></a>
        </TeamItem>
        <TeamItem>
          <StyledImage src={robot} alt="" />
          <h2>Name</h2>
          <p>Senior developer</p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          ></a>
        </TeamItem>
        <TeamItem>
          <StyledImage src={robot} alt="" />
          <h2>Name</h2>
          <p>Senior developer</p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          ></a>
        </TeamItem>
      </TeamContainer>
    </div>
  );
};

export default Team;
