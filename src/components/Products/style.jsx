import styled from "styled-components";

export const ProductsBody = styled.div`
  display: flex;
  width: 80%;
  height: fit-content;
  flex-wrap: wrap;
  gap: 20px;
  row-gap: 30px;
  column-gap: 30px;
`;

export const BurguerContainer = styled.div`
  width: 280px;
  height: 400px;
  background-color: white;
  filter: drop-shadow(0px 4px 4px gray);
  border: solid 1px #4e9154;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #55a65d;
  border-radius: 10px 10px 0px 0px;
`;

export const InfosContainer = styled.div`
  padding: 15px;
  height: 223px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-weight: bold;
    font-size: 24px;
  }
  h2 {
    color: #b5b9bf;
    font-size: 17px;
  }
  p {
    color: #55a65d;
    font-size: 18px;
    font-weight: bold;
  }
`;
