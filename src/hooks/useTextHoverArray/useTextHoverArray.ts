import { useRef, useState } from 'react';

import type { onMouseOverIndex, useTextHoverArrayPropsType } from './useTextHoverArrayType';

const useTextHoverArray = ({ text, imgArr, animationDuration }: useTextHoverArrayPropsType) => {
  const [isHoverArray, setIsHoverrArray] = useState(
    Array.from({ length: text.length }, () => false),
  );

  let imgArrStack = 0;

  const splitText = text.split('');
  const splitTextObj = splitText.map((text, mapIdx) => {
    if (imgArr.length && text === '@') {
      return { text, url: imgArr[imgArrStack++], mapIdx };
    }
    return { text, mapIdx };
  });

  const onMouseOver = (index: onMouseOverIndex) => {
    if (!isHoverArray[index]) {
      setIsHoverrArray(prevArr =>
        prevArr.map((isHover, idx) => (idx === index ? !isHover : isHover)),
      );
      setTimeout(() => {
        setIsHoverrArray(prevArr =>
          prevArr.map((isHover, idx) => (idx === index ? !isHover : isHover)),
        );
      }, animationDuration);
    }
  };

  return {
    onMouseOver,
    isHoverArray,
    splitTextObj,
    setIsHoverrArray,
  };
};

export default useTextHoverArray;
