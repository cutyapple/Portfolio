import styled, { css } from 'styled-components';

export const HoverAnimationText = styled.span`
  display: ${props => (props.isFirstLoading ? 'inline-block' : 'none')};
  width: 76px;
  height: 100px;
  background: ${props => `url(${props.url}) no-repeat -63px -5px / 204px 130px`};

  ${props =>
    props.isLoadAnimation &&
    css`
      animation: ${props.loadImgAnimation} ${props.loadImgDuration}ms;
    `}
`;
