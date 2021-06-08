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
  margin: 0 0 50px 0;

  & > h1 > span {
    color: #08fdd8;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormWrap = styled.div`
  display: grid;
  gap: 10px;
  grid-template-rows: repeat(4, 40px);
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'name email'
    'subject subject'
    'message message'
    'message message';
  width: 600px;
`;

export const FormInput = styled.input`
  grid-area: ${props => props.area};
  background: #2b2b2b;
  font-size: 16px;
  color: #8d8d8d;
  padding: 0 20px;
  border: none;
  outline: none;
`;

export const FormTextArea = styled.textarea`
  grid-area: ${props => props.area};
  background: #2b2b2b;
  font-size: 16px;
  color: #8d8d8d;
  padding: 0 20px;
  border: none;
  outline: none;
  resize: vertical;
`;

export const FormSubmit = styled.button`
  margin: 30px 0 0 0;
  width: 300px;
  height: 50px;
  background: #2b2b2b;
  color: #08fdd8;
  font-size: 14px;
  letter-spacing: 4px;
  border: 1px solid #08fdd8;
  outline: none;

  transition: all 0.7s ease;

  &:hover {
    color: #2b2b2b;
    background: #08fdd8;
    border: 1px solid #2b2b2b;
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
