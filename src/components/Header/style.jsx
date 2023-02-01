import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderS = styled.header`
  background-color: #55a65d;
  width: 100%;
  height: 80px;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 2;
  filter: drop-shadow(0px 4px 2px gray);
`

export const ContainerHeader = styled.div`
  width: 100%;
  max-width: 900px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 15px;
    align-items: center;
    ul {
      display: flex;
      gap: 10px;
    }
  }

  h1 {
    font-family: "Unbounded", cursive;
    font-size: 20px;
    color: #ffffff;
    text-decoration: underline;
  }

  img {
    width: 30px;
    cursor: pointer;
  }
`

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #ffffff;
    &.active {
      color: yellow;
    }
`