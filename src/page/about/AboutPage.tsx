import React from 'react';

import * as S from "./style";

import Navigation from '../../components/navigation/Navigation';
import AboutSection from '../../components/about/section/AboutSection';

const AboutPage = () => {
    return (
        <S.AboutPageWrap>
            <Navigation />
            <AboutSection />
        </S.AboutPageWrap>
    );
};

export default AboutPage;