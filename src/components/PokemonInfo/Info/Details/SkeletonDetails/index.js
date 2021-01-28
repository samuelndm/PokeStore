import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import * as S from "./styles";

const SkeletonCard = () => {
  return (
    <S.Container>
      {/* <Skeleton className='header' variant='rect' animation='wave' /> */}
      <Skeleton className='body' variant='rect' animation='wave' />
    </S.Container>
  );
};

export default SkeletonCard;
