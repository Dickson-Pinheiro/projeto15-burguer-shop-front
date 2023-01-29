import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 450px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const CartList = styled.div`
  background-color: #eeeeee;
  padding: 40px;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 20px;
  }

  & > p {
    margin-top: 10px;
    color: #cccccc;
  }
`;

export const TotalContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-weight: 700;
  }

  & > p {
    color: #000;
  }
`;

export const DeleteAllButton = styled.button`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  cursor: pointer;
`;
