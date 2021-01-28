import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import * as S from "./styles";

const SkeletonImage = () => {
  return (
    <S.Container>
      <Skeleton className='body' variant='rect' animation='wave' />
    </S.Container>
  );
};

export default SkeletonImage;
