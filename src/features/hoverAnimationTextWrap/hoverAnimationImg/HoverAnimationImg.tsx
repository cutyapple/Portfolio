import React, { useEffect, useState } from 'react';

import * as S from './style';

const HoverAnimationImg = ({ url, imgLoadAnimationInfo }) => {
  const {
    animation: loadImgAnimation,
    duration: loadImgDuration,
    waitTime: loadImgWaitTime,
  } = imgLoadAnimationInfo;

  const [isFirstLoading, setIsFirstLoading] = useState(false);
  const [isLoadAnimation, setIsLoadAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsFirstLoading(true);
    }, loadImgWaitTime);
    setTimeout(() => {
      setIsLoadAnimation(false);
    }, loadImgWaitTime + loadImgDuration);
  }, []);

  return (
    <S.HoverAnimationText
      url={url}
      isFirstLoading={isFirstLoading}
      isLoadAnimation={isLoadAnimation}
      loadImgAnimation={loadImgAnimation}
      loadImgDuration={loadImgDuration}
    />
  );
};

export default React.memo(HoverAnimationImg);
