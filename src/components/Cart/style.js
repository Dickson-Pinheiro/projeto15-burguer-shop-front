import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 450px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const CartHeader = styled.div`
  background-color: #51A65D;
  color: #fff;
  padding: 12px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-weight: 700;

  font-size: 20px;
`;

export const CartList = styled.div`
  background-color: #EEEEEE;
  padding: 40px;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h3{
    font-size: 20px;
  }

  & > p {
    margin-top: 10px;
    color: #CCCCCC;
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
  border: 1px solid #CCCCCC;
  cursor: pointer;
`;