import React from 'react';

import { ALogoSvg, CLogoSvg } from '../../../assets/logo';

import { BounceIn, Resilient, Rotate } from '../../../themes/Animation';

import * as S from './style';

import HoverAnimationTextWrap from '../../../features/hoverAnimationTextWrap/HoverAnimationTextWrap';

const IndexSection = () => {
  const text = `Hi, I'm\n@uty@pple,\nweb developer`;
  const imgArr = [CLogoSvg, ALogoSvg];
  const loadAnimationInfo = {
    animation: BounceIn,
    waitTime: 50,
    duration: 2000,
  };
  const hoverAnimationInfo = {
    animation: Resilient,
    duration: 1000,
  };
  const imgLoadAnimationInfo = {
    animation: Rotate,
    waitTime: 50,
    duration: 2000,
  };

  return (
    <S.SectionContainer>
      <HoverAnimationTextWrap
        text={text}
        imgArr={imgArr}
        loadAnimationInfo={loadAnimationInfo}
        hoverAnimationInfo={hoverAnimationInfo}
        imgLoadAnimationInfo={imgLoadAnimationInfo}
      />
    </S.SectionContainer>
  );
};

export default IndexSection;
