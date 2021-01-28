import styled from "styled-components";

export const Container = styled.div`
  margin: 15px 0;
  padding: 10px;
  width: 100%;
  height: 102px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ color }) => color || "#333"};

  & > * {
    width: 25% !important;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0;
    height: auto;

    & > * {
      width: 100% !important;
      margin: 0 0 10px;
    }
  }
`;
