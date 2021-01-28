import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  width: 230px;
  min-height: 200px;
  position: absolute;
  top: 50px;
  left: -200%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 13px -8px #646262;

  @media screen and (max-width: 991px) {
    padding: 0;
    width: 100%;
    min-height: 0;
  }
`;
