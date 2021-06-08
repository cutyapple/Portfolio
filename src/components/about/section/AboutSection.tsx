import React from 'react';
import  HoverAnimationTextWrap  from '../../../features/hoverAnimationTextWrap/HoverAnimationTextWrap';
import { BounceIn, Resilient, Rotate } from '../../../themes/Animation';

import * as S from "./style"

const AboutSection = () => {
    const text = `Me, CutyApple`;
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
        <S.AboutSectionWrap>
            <S.StartTag>&lt;html&gt;</S.StartTag>
            <S.AboutArticle >
                <S.HeadWrap>
                    <HoverAnimationTextWrap
                        text={text}
                        imgArr={[]}
                        loadAnimationInfo={loadAnimationInfo}
                        hoverAnimationInfo={hoverAnimationInfo}
                        imgLoadAnimationInfo={imgLoadAnimationInfo}
                    />
                </S.HeadWrap>
                <S.TextWrap>
                    <S.Tag>&lt;p&gt;</S.Tag>
                    <S.ArticleText>
                        대덕소프트웨어마이스터고등학교에 재학중인 3학년 유시온입니다. <br/>
                        새로운 기술을 배울 때의 두근거림에 이끌리는 개발자입니다.<br/>
                        <br/>
                        고등학교 1학년부터 프론트엔드를 시작하여, 3년간 능력을 키워왔습니다. <br />
                        주로 React를 사용하지만, ES6+의 기술들도 능률 높게 사용 가능합니다. <br />
                        <br />
                        사용자 경험과 깔끔한 디자인을 좋아하며, 최근에는 WebGL을 통한 인터렉티브한 <br/>
                        기술들에 관심을 가지고 있습니다.<br/>
                        <br/>
                        <br/>
                        <S.LinkText to="/contact">저와 함께 흥미로운 일을 하고 싶으신가요?</S.LinkText>
                    </S.ArticleText>
                    <S.Tag>&lt;/p&gt;</S.Tag>
                </S.TextWrap>
            </S.AboutArticle>
            <S.EndTag>&lt;/html&gt;</S.EndTag>
        </S.AboutSectionWrap>
    );
};

export default AboutSection;