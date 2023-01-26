import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 450px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  display: flex;
  flex-direction: column;
`;

export const CartHeader = styled.div`
  background-color: #51A65D;
  color: #fff;
  padding: 12px;

  font-size: 20px;
`;

export const CartList = styled.div`
  background-color: #EEEEEE;
  padding: 40px;
  text-align: center;

  display: flex;
  flex-direction: column;

  h3{
    font-size: 20px;
  }

  p {
    margin-top: 10px;
    color: #CCCCCC;
  }
`;