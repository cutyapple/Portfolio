import React from 'react';

import * as S from './style';

import { CALogoSvg } from '../../assets/logo';
import { useHistory } from 'react-router';

const Navigation = () => {
  const history = useHistory();

  return (
    <S.NavContainer>
      <S.NavHeader>
        <S.HeaderImg src={CALogoSvg} />
        <S.HeaderText>CutyApple</S.HeaderText>
        <S.HeaderSubText>Frontend Developer</S.HeaderSubText>
      </S.NavHeader>
      <S.LinkText to='/'>Home</S.LinkText>
      <S.LinkText to='/about'>About</S.LinkText>
      <S.LinkText to='/skill'>Skill</S.LinkText>
      <S.ButtonText href='https://velog.io/@cutyapple'>Blog</S.ButtonText>
      <S.LinkText to='/contact'>Contact</S.LinkText>
    </S.NavContainer>
  );
};

export default Navigation;
