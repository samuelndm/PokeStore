import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  width: 400px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--blue-color);
  border-radius: 6px;
`;

export const Text = styled.p`
  margin: 30px 0;
  font-size: 22px;
  line-height: 1.3;
  text-align: center;
  color: #fff;
`;

export const Icon = styled.i`
  font-size: 46px;
  color: #fff;
`;
