import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 15px 5px;
  padding: 30px 20px 10px;
  height: 100%;
  min-height: 425px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: #f8f8f8;
  border-radius: 5px;
`;

export const Divisor = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(204, 204, 204);
`;

export const Title = styled.h2`
  font-family: aria;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  color: #333;
  text-align: left;
`;

export const Quantity = styled.div`
  text-align: left;
  line-height: 1.2;
  color: rgb(102, 102, 102);
  font-family: aria;
  font-size: 16px;
  font-weight: 500;

  & .quantity-up {
    display: none;
  }
`;
