import React from "react";
import PropTypes from "prop-types";
import { default as StickSlider } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./styles";

const PrevArrow = (props) => {
  const { className, onClick, CustomPrevArrow } = props;
  return CustomPrevArrow ? (
    <CustomPrevArrow className={className} onClick={onClick} />
  ) : (
    <S.DefaultPrevArrow className={className} onClick={onClick} />
  );
};

const NextArrow = (props) => {
  const { className, onClick, CustomNextArrow } = props;
  return CustomNextArrow ? (
    <CustomNextArrow className={className} onClick={onClick} />
  ) : (
    <S.DefaultNextArrow className={className} onClick={onClick} />
  );
};

const Slider = ({
  children,
  slidesToShow,
  hasDots,
  responsive,
  CustomPrevArrow,
  CustomNextArrow,
  CustomDots,
}) => {
  const settings = {
    arrows: true,
    dots: hasDots,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow CustomPrevArrow={CustomPrevArrow} />,
    nextArrow: <NextArrow CustomNextArrow={CustomNextArrow} />,
    responsive: responsive || [],
    appendDots: (dots) =>
      CustomDots ? <CustomDots>{dots}</CustomDots> : <S.Dots>{dots}</S.Dots>,
  };

  return (
    <StickSlider {...settings} style={S.SliderStyle}>
      {children}
    </StickSlider>
  );
};

Slider.propTypes = {
  children: PropTypes.element.isRequired,
  slidesToShow: PropTypes.number,
  hasDots: PropTypes.bool,
  responsive: PropTypes.array,
  CustomPrevArrow: PropTypes.element,
  CustomNextArrow: PropTypes.element,
  CustomDots: PropTypes.element,
};

export default Slider;
