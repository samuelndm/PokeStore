import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPokemonSpritesUrl } from "../../../../utils/pokemonInfoUtil";
import * as S from "./styles";
import * as UI from "../../../UIComponents";
import SkeletonImage from "./SkeletonImage";

const Images = ({ sprites }) => {
  const [imagesUrl, setImagesUrl] = useState([]);

  useEffect(() => {
    const urls = getPokemonSpritesUrl(sprites);

    setTimeout(() => {
      setImagesUrl(urls);
    }, [1000]);
  }, [sprites]);

  return (
    <S.Container>
      {!imagesUrl.length ? (
        <SkeletonImage />
      ) : (
        <>
          {imagesUrl.length === 1 ? (
            <S.Image src={imagesUrl[0]} alt='imagem do pokémon' />
          ) : (
            <UI.Slider
              CustomPrevArrow={S.CustomPrevArrow}
              CustomNextArrow={S.CustomNextArrow}
              settings={{
                dots: true,
                // dotsClass: "slick-dots slick-thumb",
                appendDots: (dots) => <S.Dots>{dots}</S.Dots>,
                customPaging: (index) => (
                  <S.CustonDots src={imagesUrl?.[index]} />
                ),
              }}
            >
              {imagesUrl?.map((url) => (
                <S.Image
                  src={url}
                  alt='imagem do pokémon'
                  key={`pokemon-image-${url}`}
                />
              ))}
            </UI.Slider>
          )}
        </>
      )}
    </S.Container>
  );
};

Images.propTypes = {
  sprites: PropTypes.object.isRequired,
};

export default Images;
