import React from 'react';

import * as S from "./style";

import Navigation from '../../components/navigation/Navigation';
import SkillSection from '../../components/skill/section/SkillSection';

const SkillPage = () => {
    return (
        <S.AboutPageWrap>
            <Navigation />
            <SkillSection />
        </S.AboutPageWrap>
    );
};

export default SkillPage;