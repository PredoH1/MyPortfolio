import React from "react";
import * as S from "./style";

export default function Header() {
  return (
    <S.Header>
      <section>
        <S.MyName>Pedro Henrique Souza Candido</S.MyName>
      </section>

      <S.NavMenu>
        <S.Links href="">Home</S.Links>
        <S.Links href="">About me</S.Links>
        <S.Links href="">Contact</S.Links>
      </S.NavMenu>
    </S.Header>
  );
}
