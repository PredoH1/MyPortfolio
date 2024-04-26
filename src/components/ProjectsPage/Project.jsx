import React from "react";
import * as S from "./style";
import { motion } from "framer-motion";
import project1 from "../../assets/Project1.png";
import project2 from "../../assets/Project2.png";
import project3 from "../../assets/Project3.png";
import project4 from "../../assets/Project4.png";
import project5 from "../../assets/Project5.png";

export default function Project() {
  return (
    <S.Container>
      <S.BoxTitle>
        <S.firsTitle>My recent</S.firsTitle>
        <S.endTitle>works</S.endTitle>
      </S.BoxTitle>
      <S.BoxProjects>
        <S.Projects>
          <S.imgProject src={project1} alt="" />
          <S.linkProject href="">
            <S.VerMais>Ver mais</S.VerMais>
          </S.linkProject>
          <S.TitleProject>Lista de Tarefas</S.TitleProject>
        </S.Projects>

        <S.Projects>
          <S.imgProject src={project2} alt="" />
          <S.linkProject href="">
            <S.VerMais>Ver mais</S.VerMais>
          </S.linkProject>
          <S.TitleProject>CoffeeVibes</S.TitleProject>
        </S.Projects>

        <S.Projects>
          <S.imgProject src={project3} alt="" />
          <S.linkProject href="">
            <S.VerMais>Ver mais</S.VerMais>
          </S.linkProject>
          <S.TitleProject>Page Mc Donalds</S.TitleProject>
        </S.Projects>

        <S.Projects>
          <S.imgProject src={project4} alt="" />
          <S.linkProject href="">
            <S.VerMais>Ver mais</S.VerMais>
          </S.linkProject>
          <S.TitleProject>SelfCare</S.TitleProject>
        </S.Projects>

        <S.Projects>
          <S.imgProject src={project5} alt="" />
          <S.linkProject href="">
            <S.VerMais>Ver mais</S.VerMais>
          </S.linkProject>
          <S.TitleProject>Portfolio</S.TitleProject>
        </S.Projects>
      </S.BoxProjects>
    </S.Container>
  );
}
