import React from 'react';

import * as S from './style';

import Navigation from '../../components/navigation/Navigation';
import IndexSection from '../../components/main/indexSection/IndexSection';

const MainPage = () => {
  return (
    <S.MainPageWrap>
      <Navigation />
      <S.SectionWrap>
        <S.TagSpan>&lt;html&gt;</S.TagSpan>
        <IndexSection />
        <S.EndTagSpan>&lt;/html&gt;</S.EndTagSpan>
      </S.SectionWrap>
    </S.MainPageWrap>
  );
};

export default MainPage;
