import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

export const CustomPrevArrow = styled.div`
  z-index: 5;
  padding: 15px;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 100%;
  left: 0;
  text-align: center;

  &:before {
    color: var(--blue-color);
    font-size: 30px;
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    content: "\f104";
    opacity: 1;
  }

  @media screen and (max-width: 1050px) {
    left: -1%;
  }

  @media screen and (max-width: 575px) {
    left: -5%;
  }
`;

export const CustomNextArrow = styled.div`
  z-index: 5;
  padding: 15px;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 100%;
  right: 0;
  text-align: center;

  &:before {
    color: var(--blue-color);
    font-size: 30px;
    font-family: "Font Awesome 5 Free";
    font-weight: 700;
    content: "\f105";
    opacity: 1;
  }

  @media screen and (max-width: 1050px) {
    right: -1%;
  }

  @media screen and (max-width: 575px) {
    right: -10%;
    transform: translate(-27px, -25px);
  }
`;
