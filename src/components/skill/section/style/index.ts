import styled from 'styled-components';
import { LaBelleAuroreFontName } from '../../../../themes/GlobalStyle';
import { Link } from 'react-router-dom';

export const AboutSections = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const AboutSectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 50px;
`;

export const Tag = styled.span`
  position: relative;
  color: #515152;
  font-size: 1.4rem;
  font-family: ${LaBelleAuroreFontName} !important;
`;

export const StartTag = styled.span`
  position: relative;
  color: #515152;
  font-size: 1.4rem;
  font-family: ${LaBelleAuroreFontName} !important;

  &::after {
    content: '<body>';
    position: absolute;
    transform: translate(-3rem, 2rem);
  }
`;

export const AboutArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

export const HeadWrap = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 > span {
    color: #08fdd8;
  }
`;

export const ArticleHead = styled.h2`
  color: #08fdd8;
  font-size: 5rem;
  font-weight: bold;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleText = styled.p`
  color: #ffffff;
  font-size: 18px;
  line-height: 24px;
  padding: 0 0 0 30px;
`;

export const LinkText = styled(Link)`
  color: #08fdd8;
  text-decoration: none;

  transition: color 0.3s;

  &:hover {
    color: #1bcfb3;
  }
`;

export const EndTag = styled.span`
  position: relative;
  color: #515152;
  font-size: 1.4rem;
  font-family: ${LaBelleAuroreFontName} !important;

  &::after {
    content: '</body>';
    position: absolute;
    transform: translate(-3rem, -2rem);
  }
`;

export const SkillSection = styled.section`
  display: flex;
  width: 500px;
  height: 100%;
  justify-content: center;
`;

export const SkillGuageArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SkillGuageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30px;
  margin: 20px 0;
`;

export const SkillGaugeName = styled.p`
  color: #fff;
  font-size: 18px;
`;

export const SkillGauge = styled.progress`
  width: 500px;
  height: 2px;
  border-radius: 2px;

  &::-webkit-progress-bar {
    background-color: #373737;
    border-radius: 2px;
  }
  &::-webkit-progress-value {
    background-color: ${props => props.color};
    border-radius: 2px;
  }
`;
