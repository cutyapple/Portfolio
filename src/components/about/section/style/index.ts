import styled from 'styled-components';
import { LaBelleAuroreFontName } from '../../../../themes/GlobalStyle';

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
        content: "<body>";
        position: absolute;
        transform: translate(-3rem, 2rem);

    }
`;

export const AboutArticle = styled.article`
    display: flex;
    flex-direction: column;
`;

export const HeadWrap = styled.div`
    display:  flex;
    flex-direction: column;
    
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
    font-size: 14px;
`;

export const EndTag = styled.span`
    position: relative;
    color: #515152;
    font-size: 1.4rem;
    font-family: ${LaBelleAuroreFontName} !important;

    &::after {
        content: "</body>";
        position: absolute;
        transform: translate(-3rem, -2rem);

    }
`;
