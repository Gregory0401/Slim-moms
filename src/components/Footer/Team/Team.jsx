import React from 'react';
import robot from 'img/2555.png';
import robot2 from 'img/robto2.png';
import robot404 from 'img/404.png';
import robot3 from 'img/robot.png';
import {
  StyledImage,
  TeamItem,
  TeamContainer,
  TeamTitle,
  TeamMeta,
} from './Team.styled';

const Team = () => {
  return (
    <div>
      <TeamContainer>
        <TeamItem>
          <a
            href="https://github.com/Gregory0401"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot2} alt="" />
          </a>
          <TeamTitle>Григорій Шмойлов</TeamTitle>
          <TeamMeta>Team Lead</TeamMeta>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/OttoCarius"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot} alt="team-photo" />
          </a>

          <TeamTitle>Андрій Підлісний</TeamTitle>
          <TeamMeta>Scrum Master</TeamMeta>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/DariaIliuchenko"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot3} alt="team-photo" />
          </a>

          <TeamTitle>Дар‘я Ільюченко</TeamTitle>
          <TeamMeta>Developer</TeamMeta>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/Yana-Palam"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            {' '}
            <StyledImage src={robot} alt="team-photo" />
          </a>

          <TeamTitle>Яна Паламарчук</TeamTitle>
          <TeamMeta>Developer</TeamMeta>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/Aleksandr-Alekseenko-23"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot3} alt="team-photo" />
          </a>

          <TeamTitle>Олександр Алєксєєнко</TeamTitle>
          <TeamMeta>Developer</TeamMeta>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/Kosynskyi"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot} alt="team-photo" />
          </a>

          <TeamTitle>Володимир Косинський</TeamTitle>
          <TeamMeta>Developer</TeamMeta>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/WoLfEER"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot404} alt="team-photo" />
          </a>

          <TeamTitle>Андрій Вовк</TeamTitle>
          <TeamMeta>Developer</TeamMeta>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/AlonaHarnyk"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot} alt="team-photo" />
          </a>

          <TeamTitle>Альона Гарник</TeamTitle>
          <TeamMeta>Goddess of Code</TeamMeta>
        </TeamItem>
        <TeamItem>
          <a
            href="https://github.com/skripnichenko"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <StyledImage src={robot2} alt="team-photo" />
          </a>

          <TeamTitle>Саша Срипниченко</TeamTitle>
          <TeamMeta>Princess of Code</TeamMeta>
        </TeamItem>
      </TeamContainer>
    </div>
  );
};

export default Team;
