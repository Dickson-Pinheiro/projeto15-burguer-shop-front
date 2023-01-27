import styled from "styled-components";

export const StyledProductCart = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 25%;
  padding: 5px;
  border-radius: 5px;
  background-color: #CCCCCC;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  align-self: stretch;
  flex-grow: 2;

  text-align: start;
  margin-left: 5px;

  & > h3 {
    font-weight: 700;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: #CCCCCC;
  padding: 3px;
  border-radius: 3px;
  cursor: pointer;
`;