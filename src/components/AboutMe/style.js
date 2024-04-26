import styled from "styled-components";
import backgroundImg from "../../assets/imgAbout.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  align-items: center;
  border-bottom: 0.5px solid rgba(238, 238, 238, 0.1);
`;

export const SubContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin: 4.6rem 0rem 0rem 0rem;
`;

export const Title = styled.h1`
  color: #eee;
  font-family: Poppins;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0rem 1.6rem 0rem 0rem;
`;

export const TextaAbout = styled.section`
  width: 50%;
  margin: 1.6rem 0rem 4rem 0rem;
`;

export const Paragraph = styled.section`
  color: rgba(238, 238, 238, 0.75);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const arrowAbout = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
`;

export const ContainerIcon = styled.div`
  background-image: url(${backgroundImg});
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 35%;
  height: 25rem;
`;

export const BoxIcon = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 25%;
  height: 35%;
  margin: 0.5rem;

  &:hover {
    transform: scale(102%);
  }
`;
