import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

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
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 0;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    background-color: #d0d0d0;
  }
`;
