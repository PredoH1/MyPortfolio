import React from "react";
import * as S from "./style";
import seta from "../../assets/arrow.svg";
import linkedin from "../../assets/LinkedinIcon.svg";
import notepad from "../../assets/notepadIcon.svg";
import homeDrawing from "../../assets/homeDrawing.png";

export default function Main() {
  return (
    <S.Main>
      <S.SectionNav>
        <section>
          <S.ArrowImg src={seta} alt="Seta" />
        </section>
        <section>
          <S.TitleTop>Desenvolvedor</S.TitleTop>
          <S.TitleBottom>Front-End</S.TitleBottom>
          <S.BoxIcon>
            <a
              href="https://www.linkedin.com/in/pedrohsouzacandido/"
              target="blank"
            >
              <S.HireMe>
                <S.IconImg src={linkedin} alt="" />
                <S.TitleIcon>Linkedin</S.TitleIcon>
              </S.HireMe>
            </a>
            <a href="">
              <S.Curriculo>
                <S.IconImg src={notepad} alt="" />
                <S.TitleIcon>Currículo</S.TitleIcon>
              </S.Curriculo>
            </a>
          </S.BoxIcon>
        </section>
      </S.SectionNav>

      <section>
        <S.ImgHome src={homeDrawing} alt="" />
      </section>
    </S.Main>
  );
}
