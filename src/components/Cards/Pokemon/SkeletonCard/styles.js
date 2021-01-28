import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  width: 230px;
  height: 320px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  border-radius: 6px;
  box-shadow: 0 2px 13px -8px #646262;
  pointer-events: none;

  & > .header {
    width: 100%;
    height: 80px;
    border-radius: 0;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    background-color: #d0d0d0;
    // background-color: ${({ color }) => `${color}` || "#d0d0d0"};
    // filter: brightness(0.7);
  }

  & > .circle {
    margin: 0 auto;
    width: 110px;
    height: 110px;
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    background-color: #d0d0d0;
    // background-color: ${({ color }) => color || "#d0d0d0"};
    // filter: brightness(0.7);
  }

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
