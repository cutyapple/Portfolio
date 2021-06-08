import { sendForm } from 'emailjs-com';
import React, { useEffect, useState } from 'react';
import HoverAnimationTextWrap from '../../../features/hoverAnimationTextWrap/HoverAnimationTextWrap';
import { BounceIn, Resilient, Rotate } from '../../../themes/Animation';

import * as S from './style';

const ContactSection = () => {
  const text = `Contact Me!`;
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

  const onSend = e => {
    e.preventDefault();

    sendForm('service_jroz2yf', 'template_ps4rwjm', e.target, 'user_h1Br6569JeqS4BBT9U4fb')
      .then(res => console.log(res))
      .catch(failure => console.log(failure));
  };

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
          <S.ContactForm onSubmit={onSend}>
            <S.FormWrap>
              <S.FormInput type='text' name='name' placeholder='Name' area='name' />
              <S.FormInput type='text' name='user_email' placeholder='Email' area='email' />
              <S.FormInput type='text' name='subject' placeholder='Subject' area='subject' />
              <S.FormTextArea type='text' name='message' placeholder='Message' area='message' />
            </S.FormWrap>
            <S.FormSubmit type='submit'>Send Message!</S.FormSubmit>
          </S.ContactForm>
        </S.AboutArticle>
        <S.EndTag>&lt;/html&gt;</S.EndTag>
      </S.AboutSectionWrap>
    </S.AboutSections>
  );
};

export default ContactSection;
