import React from 'react';

import * as S from "./style"

const AboutSection = () => {
    return (
        <S.AboutSectionWrap>
            <S.StartTag>&lt;html&gt;</S.StartTag>
            <S.AboutArticle >
                <S.HeadWrap>
                    <S.Tag>&lt;h2&gt;</S.Tag>
                    <S.ArticleHead>
                        Me, CutyApple
                    </S.ArticleHead>
                    <S.Tag>&lt;/h2&gt;</S.Tag>
                </S.HeadWrap>
                <S.TextWrap>
                    <S.Tag>&lt;p&gt;</S.Tag>
                    <S.ArticleText>
                        대덕소프트웨어마이스터고등학교에 재학중인 3학년 유시온입니다. <br/>
                        새로운 기술을 배울 때의 두근거림에 이끌리는 개발자입니다.
                    </S.ArticleText>
                    <S.Tag>&lt;/p&gt;</S.Tag>
                </S.TextWrap>
            </S.AboutArticle>
            <S.EndTag>&lt;/html&gt;</S.EndTag>
        </S.AboutSectionWrap>
    );
};

export default AboutSection;