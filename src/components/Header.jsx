import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Burguer Shop</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  padding-left: 30px;
  background-color: #eeeeee;
  color: black;
  width: 100%;
  height: 80px;
  text-align: center;
  font-family: "Saira Stencil One", cursive;
  font-size: 34px;
  font-weight: 400;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0px;
  top: 0px;
`;
