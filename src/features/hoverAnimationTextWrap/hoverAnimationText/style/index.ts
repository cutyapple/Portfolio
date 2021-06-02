import styled, { css } from 'styled-components';

export const HoverAnimationText = styled.span`
  display: ${props => (props.isFirstLoading ? 'inline-block' : 'none')};
  max-height: 4.375rem;
  color: #ffffff;
  font-size: 6rem;
  font-weight: bold;
  font-family: Roboto !important;
  transition: color 0.3s ease-in-out;

  ${props =>
    props.isLoadAnimation &&
    css`
      animation: ${props.loadAnimation} ${props.loadDuration}ms;
    `}

  ${props =>
    props.isHover &&
    props.isHoverAnimation &&
    css`
      animation: ${props.hoverAnimation} ${props.hoverDuration}ms;
    `}

  &:hover {
    color: #08fdd8;
  }
`;
