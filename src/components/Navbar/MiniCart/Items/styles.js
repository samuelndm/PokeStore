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
  justify-content: space-between;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 13px -8px #646262;

  @media screen and (max-width: 575px) {
    left: 0;
    left: -200px;
  }
`;
