import React, { useEffect, useState } from 'react';
import HoverAnimationTextWrap from '../../../features/hoverAnimationTextWrap/HoverAnimationTextWrap';
import { BounceIn, Resilient, Rotate } from '../../../themes/Animation';

import * as S from './style';

const SkillSection = () => {
  const [skillGauge, setSkillGauge] = useState(0);

  const [skillGuageList, setskillGuageList] = useState([
    {
      name: 'React',
      max: 90,
      value: 0,
      color: '#08fdd8',
    },
    {
      name: 'ES6+',
      max: 80,
      value: -10,
      color: '#ff2253',
    },
    {
      name: 'TypeScript',
      max: 45,
      value: -20,
      color: '#d26cd5',
    },
    {
      name: 'Redux',
      max: 70,
      value: -30,
      color: '#08fdd8',
    },
  ]);

  const text = `Skills & \nExperience`;
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

  useEffect(() => {
    const max = 200;
    let tempGuage = 0;

    setInterval(() => {
      tempGuage += 1;
      if (tempGuage < max) {
        setskillGuageList(prev =>
          prev.map(data => {
            if (data.value < data.max) {
              return { ...data, value: data.value + 1 };
            } else {
              return data;
            }
          }),
        );
      }
    }, 10);
  }, []);

  return (
    <S.AboutSections>
      <S.AboutSectionWrap>
        <S.StartTag>&lt;html&gt;</S.StartTag>
        <S.AboutArticle>
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
              JavaScript View 라이브러리인 React를 주로 사용합니다. <br />
              그러나 Vanilla JavaScript도 ES+6의 기술도 사용 가능합니다. <br />
              <br />
              React를 기반으로 한 여러 프로젝트를 해왔고, 실제로 배포 및 서비스, 유지보수의 <br />
              경험이 있습니다. Redux 라이브러리를 주로 사용하고, <br />
              최근에는 Mobx를 흥미롭게 보고 있습니다. <br />
              <br />
              TypeScript를 다룰 수 있으며. Jest와 React Testing Library를 통한 테스트가 가능합니다.{' '}
              <br />
              <br />
              <br />
              <S.LinkText to='/contact'>저와 함께 흥미로운 일을 하고 싶으신가요?</S.LinkText>
            </S.ArticleText>
            <S.Tag>&lt;/p&gt;</S.Tag>
          </S.TextWrap>
        </S.AboutArticle>
        <S.EndTag>&lt;/html&gt;</S.EndTag>
      </S.AboutSectionWrap>
      <S.SkillSection>
        <S.SkillGuageArticle>
          {skillGuageList.map(skillGuage => (
            <S.SkillGuageWrapper key={skillGuage.name}>
              <S.SkillGaugeName>{skillGuage.name}</S.SkillGaugeName>
              <S.SkillGauge value={skillGuage.value} max='100' color={skillGuage.color} />
            </S.SkillGuageWrapper>
          ))}
        </S.SkillGuageArticle>
      </S.SkillSection>
    </S.AboutSections>
  );
};

export default SkillSection;
