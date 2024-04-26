import styled from "styled-components";
import backgroundImg from "../../assets/backgroundProjects.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImg});
  background-size: contain;
`;

export const BoxTitle = styled.section`
  display: flex;
  width: 35rem;
  margin: 16rem 7.5rem 3rem 7.5rem;
  background-color: transparent;
`;

export const firsTitle = styled.h1`
  color: #eee;
  margin-right: 1rem;
  font-family: Poppins;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const endTitle = styled.h1`
  color: #00adb5;
  font-family: Poppins;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const BoxProjects = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 16rem;
  background-color: transparent;
`;

export const Projects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 3rem;
  border-radius: 1rem;
  background: rgba(57, 62, 70, 0.5);
  backdrop-filter: blur(2px);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 17.5rem;
  height: 14.2rem;
`;

export const TitleProject = styled.h3`
  background-color: transparent;
  color: #eee;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const imgProject = styled.img`
  max-width: 12rem;
  max-height: 8.5rem;
`;

export const linkProject = styled.a`
  background-color: transparent;
  text-decoration: none;
  margin: 1rem 0rem;
`;

export const VerMais = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background-color: #00adb5;
  color: #eeee;
  width: 5rem;
  height: 2rem;
  border: none;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
