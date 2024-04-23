import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(238, 238, 238, 0.1);
`;

export const MyName = styled.h2`
  font-family: Oswald;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #eeeeee;
  padding: 1.5rem 3rem;
`;

export const Links = styled.a`
  text-decoration: none;
  color: #eeeeee;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 1.5rem;
`;

export const NavMenu = styled.nav`
  padding: 1.5rem 3rem;
`;
