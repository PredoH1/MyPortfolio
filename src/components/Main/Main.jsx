import React from "react";
import * as S from "./style";
import seta from "../../assets/arrow.svg";
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
          <div>
            <S.HireMe>Hire Me</S.HireMe>
            <S.Curriculo>currículo </S.Curriculo>
          </div>
        </section>
      </S.SectionNav>

      <section>
        <S.ImgHome src={homeDrawing} alt="" />
      </section>
    </S.Main>
  );
}
