import React from 'react';

import * as S from './style';

import Navigation from '../../components/navigation/Navigation';
import ContactSection from '../../components/contact/section/ContactSection';

const AboutPage = () => {
  return (
    <S.ContactPageWrap>
      <Navigation />
      <ContactSection />
    </S.ContactPageWrap>
  );
};

export default AboutPage;
