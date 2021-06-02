import React from 'react';

import { areEqual } from '../../utils/StringUtil/StringUtil';

import useTextHoverArray from '../../hooks/useTextHoverArray/useTextHoverArray';

import * as S from './style';

import HoverAnimationImg from './hoverAnimationImg/HoverAnimationImg';
import HoverAnimationText from './hoverAnimationText/HoverAnimationText';

const HoverAnimationTextWrap = ({
  text,
  loadAnimationInfo,
  hoverAnimationInfo,
  imgLoadAnimationInfo,
  imgArr,
}) => {
  const { splitTextObj, isHoverArray, onMouseOver } = useTextHoverArray({
    text: text,
    imgArr: imgArr,
    animationDuration: hoverAnimationInfo.duration,
  });

  const defaultLoadWaitTime = 500;
  const loadAnimationDuration = loadAnimationInfo.duration;

  return (
    <S.HoverAnimationTextWrap>
      {splitTextObj.map((textObj, index) =>
        textObj.text === '\n' ? (
          <br key={textObj.mapIdx} />
        ) : textObj.text === ' ' ? (
          <S.HoverAnimationNullText key={textObj.mapIdx} />
        ) : textObj.url ? (
          <HoverAnimationImg
            url={textObj.url}
            key={textObj.mapIdx}
            imgLoadAnimationInfo={{
              ...imgLoadAnimationInfo,
              waitTime: defaultLoadWaitTime + loadAnimationInfo.waitTime * index,
            }}
          />
        ) : (
          <HoverAnimationText
            key={textObj.mapIdx}
            text={textObj.text}
            isHover={isHoverArray[textObj.mapIdx]}
            fullWaitTime={
              defaultLoadWaitTime +
              loadAnimationDuration +
              splitTextObj.length * loadAnimationInfo.waitTime
            }
            loadAnimationInfo={{
              ...loadAnimationInfo,
              waitTime: defaultLoadWaitTime + loadAnimationInfo.waitTime * index,
            }}
            hoverAnimationInfo={hoverAnimationInfo}
            onMouseOver={() => onMouseOver(textObj.mapIdx)}
          />
        ),
      )}
    </S.HoverAnimationTextWrap>
  );
};

export default React.memo(HoverAnimationTextWrap, areEqual);
