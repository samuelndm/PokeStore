import styled from "styled-components";

export const Container = styled.h2`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;

  text-align: left;
  line-height: 1.2;
  color: rgb(102, 102, 102);
  font-family: aria;
  font-size: 14.5px;
  font-weight: 500;
`;

export const Strong = styled.strong`
  text-align: left;
  line-height: 1.2;
  color: rgb(102, 102, 102);
  font-family: aria;
  font-size: 14.5px;
  font-weight: 600;
`;

export const Value = styled.span`
  text-align: left;
  line-height: 1.2;
  color: rgb(0 200 93);
  font-family: aria;
  font-size: 15px;
  font-weight: 700;
`;
