import styled from 'styled-components';

import { LaBelleAuroreFontName } from '../../../themes/GlobalStyle';

export const MainPageWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const TagSpan = styled.span`
  z-index: 3;
  position: absolute;
  transform: translate(1.5rem, 1.25rem);
  color: #515152;
  font-size: 1.4rem;
  font-family: ${LaBelleAuroreFontName} !important;

  &::after {
    content: '<body>';
    position: absolute;
    transform: translate(-3rem, 1.5rem);
    color: #515152;
    font-size: 1.4rem;
    font-family: ${LaBelleAuroreFontName} !important;
  }
`;

export const EndTagSpan = styled.span`
z-index: 3;
position: absolute;
transform: translate(1.5rem, -3.75rem);
color: #515152;
font-size: 1.4rem;
font-family: ${LaBelleAuroreFontName} !important;

&::before {
  content: '<body>';
  position: absolute;
  transform: translate(2rem, -2.5rem);
  color: #515152;
  font-size: 1.4rem;
  font-family: ${LaBelleAuroreFontName} !important;
}
`;

export const SectionWrap = styled.div`
  width: calc(100vw - 10rem);
  height: 100vh;
`;
