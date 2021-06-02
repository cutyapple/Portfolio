import React, { useEffect, useState } from 'react';
import { areEqual } from '../../../utils/StringUtil/StringUtil';

import * as S from './style';

const HoverAnimationText = ({
  text,
  isHover,
  fullWaitTime,
  loadAnimationInfo,
  hoverAnimationInfo,
  onMouseOver,
}) => {
  const {
    animation: loadAnimation,
    duration: loadDuration,
    waitTime: loadWaitTime,
  } = loadAnimationInfo;
  const { animation: hoverAnimation, duration: hoverDuration } = hoverAnimationInfo;

  const [isFirstLoading, setIsFirstLoading] = useState(false);
  const [isLoadAnimation, setIsLoadAnimation] = useState(true);
  const [isHoverAnimation, setIsHoverAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFirstLoading(true);
    }, loadWaitTime);
    setTimeout(() => {
      setIsLoadAnimation(false);
    }, loadWaitTime + loadDuration);
    setTimeout(() => {
      setIsHoverAnimation(true);
    }, fullWaitTime);
  }, []);

  return (
    <S.HoverAnimationText
      isHover={isHover}
      isFirstLoading={isFirstLoading}
      isLoadAnimation={isLoadAnimation}
      isHoverAnimation={isHoverAnimation}
      loadAnimation={loadAnimation}
      loadWaitTime={loadWaitTime}
      loadDuration={loadDuration}
      hoverAnimation={hoverAnimation}
      hoverDuration={hoverDuration}
      onMouseOver={onMouseOver}
    >
      {text}
    </S.HoverAnimationText>
  );
};

export default React.memo(HoverAnimationText, areEqual);
