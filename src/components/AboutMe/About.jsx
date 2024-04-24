import React from "react";
import * as S from "./style";
import IconMusic from "../../assets/iconMusic.svg";
import Lamp from "../../assets/lamp.svg";
import arrowAbout from "../../assets/arrowAbout.svg";
import htmlIcon from "../../assets/htmlIcon.svg";
import cssIcon from "../../assets/cssIcon.svg";
import javascriptIcon from "../../assets/javascriptIcon.svg";
import reactIcon from "../../assets/react.svg";

export default function About() {
  return (
    <S.Container>
      <S.SubContainer>
        <div>
          <img src={IconMusic} alt="" />
        </div>

        <S.TitleBox>
          <S.Title>About me</S.Title>
          <img src={Lamp} alt="" />
        </S.TitleBox>

        <S.TextaAbout>
          <S.Paragraph>
            Olá! Me chamo Pedro Henrique, sou desenvolvedor Front-End com
            experiência sólida em criar experiências web incríveis. Minha sólida
            formação técnica e experiência prática me equiparam para enfrentar
            desafios complexos no desenvolvimento web. Ao longo da minha
            trajetória, adquiri proficiência nas seguintes tecnologias: HTML ·
            CSS · JavaScript - React.
          </S.Paragraph>
        </S.TextaAbout>

        <S.arrowAbout>
          <img src={arrowAbout} alt="" />
        </S.arrowAbout>
      </S.SubContainer>
      <S.ContainerIcon>
        <S.BoxIcon>
          <img src={htmlIcon} alt="" />
        </S.BoxIcon>
        <S.BoxIcon>
          <img src={cssIcon} alt="" />
        </S.BoxIcon>
        <S.BoxIcon>
          <img src={javascriptIcon} alt="" />
        </S.BoxIcon>
        <S.BoxIcon>
          <img src={reactIcon} alt="" />
        </S.BoxIcon>
      </S.ContainerIcon>
    </S.Container>
  );
}
