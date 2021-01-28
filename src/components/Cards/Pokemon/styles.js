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
  transition: box-shadow 400ms ease, transform 400ms ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(14, 14, 14, 0.15);
    transform: scale(1.02) translate(0px, -6px);
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 0;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  background-color: var(--current-type-color);
`;

export const Image = styled.img`
  z-index: 10;
  margin: 0 auto;
  padding: 5px;
  width: 110px;
  height: 110px;
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 3px solid var(--current-type-color);
  border-radius: 50%;
`;

export const Body = styled.div`
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
`;

export const Name = styled.h2`
  font-family: "Sigmar One", sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #333;
`;
