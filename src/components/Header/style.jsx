import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding-left: 30px;
  background-color: #55a65d;
  color: black;
  width: 100%;
  height: 80px;
  text-align: center;
  font-weight: 400;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 2;
  filter: drop-shadow(0px 4px 2px gray);
  h1 {
    font-family: "Unbounded", cursive;
    font-size: 30px;
    color: #ffffff;
    text-decoration: underline;
  }
`;
