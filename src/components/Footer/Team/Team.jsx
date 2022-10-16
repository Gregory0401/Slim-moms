import React from 'react';
import robot from 'img/2555.png';
import robot2 from 'img/robto2.png'
import { StyledImage, TeamItem, TeamContainer,TeamTitle} from './Team.styled';

const Team = () => {
  return (
    <div>
      <TeamContainer>
        <TeamItem>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot} alt="" />
          </a>

          <TeamTitle>Григорій Шмойлов</TeamTitle>
          <p>Team Lead</p>  </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot} alt="team-photo" />
          </a>

          <TeamTitle>Андрій Підлісний</TeamTitle>
          <p>Scrum Master</p>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot} alt="team-photo" />
          </a>

          <TeamTitle>Дар‘я Ільюченко</TeamTitle>
          <p>Developer</p>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            {' '}
            <StyledImage src={robot} alt="team-photo" />
          </a>

          <TeamTitle>Яна Паламарчук</TeamTitle>
          <p>Developer</p>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot} alt="team-photo" />
          </a>

          <TeamTitle>Олександр Алєксєєнко</TeamTitle>
          <p>Developer</p>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot} alt="team-photo" />
          </a>

          <TeamTitle>Володимир Косинський</TeamTitle>
          <p>Developer</p>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot} alt="team-photo" />
          </a>

          <TeamTitle>Андрій Вовк</TeamTitle>
          <p>Developer</p>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
  
            <StyledImage src={robot} alt="team-photo" />
          </a>

          <TeamTitle>Альона Гарник</TeamTitle>
          <p>Goddess of Code</p>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot2} alt="team-photo" />
          </a>

          <TeamTitle>Саша Срипниченко</TeamTitle>
          <p>Princess of Code</p>   
        </TeamItem>
      </TeamContainer>
    </div>
  );
};

export default Team;
