import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  border-radius: 6px;
  box-shadow: 0 2px 13px -8px #646262;
  pointer-events: none;

  & > .body {
    flex: 1;
    padding: 60px 10px 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 0;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
`;
