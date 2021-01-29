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


  }
`;

export const CustomPrevArrow = styled.div`
  z-index: 5;
  padding: 15px;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 71%;
  left: -30px;
  text-align: center;

  &:before {
    color: var(--blue-color);
    color: var(--current-type-color);
    font-size: 30px;
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    content: "\f104";
    opacity: 1;
  }
`;

export const CustomNextArrow = styled.div`
  z-index: 5;
  padding: 15px;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 71%;
  right: -30px;
  text-align: center;

  &:before {
    color: var(--blue-color);
    color: var(--current-type-color);
    font-size: 30px;
    font-family: "Font Awesome 5 Free";
    font-weight: 700;
    content: "\f105";
    opacity: 1;
  }
`;

export const Dots = styled.ul`
  padding: 0 10px;
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;

  & li {
    margin: 5px;
    width: 60px;
    height: 60px;
    background-color: #e6e6e6c7;
  }

  & li.slick-active {
    background-color: var(--current-type-color);
    opacity: 0.6;
  }
`;

export const CustonDots = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;
