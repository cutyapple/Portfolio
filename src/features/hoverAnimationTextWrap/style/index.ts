import styled from 'styled-components';

import { LaBelleAuroreFontName } from '../../../themes/GlobalStyle';

export const SectionContainer = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: #1d1d1d;
`;

export const HoverAnimationTextWrap = styled.h1`
  /* height: max-content; */

  &::before {
    content: '<h1>';
    position: absolute;
    transform: translate(-20px, -20px);
    color: #515152;
    font-size: 1.8rem;
    font-family: ${LaBelleAuroreFontName} !important;
  }
  &::after {
    content: '</h1>';
    position: absolute;
    margin-top: 3.8rem;
    margin-left: 2rem;

    color: #515152;
    font-size: 1.8rem;
    font-family: ${LaBelleAuroreFontName} !important;
  }
`;
export const HoverAnimationNullText = styled.span`
  margin: 1rem;
`;
