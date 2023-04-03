import logo from '../../images/icons/logo-Lite-Icon.svg';
import facebook from '../../images/icons/facebook-logo.svg';
import twitter from '../../images/icons/twitter-logo.svg';
import youtube from '../../images/icons/youtube-logo.svg';
import instagram from '../../images/icons/instagram-logo.svg';

import {
  FooterSection,
  Container,
  LogoCapLinkFormWrap,
  LogoCapLinkWrap,
  LogoCapWrap,
  LogoLink,
  LogoTitle,
  LogoImg,
  AppCapabilitiesList,
  AppCapabilitiesItem,
  FooterLinkWrap,
  FooterLink,
  SubscFomrWrap,
  SubscribeWrap,
  FormFooter,
  FormFooterInput,
  FormFooterBtn,
  SocialWrap,
  SocialLink,
  SocialIcon,
  SocialImg,

  SubFooter,
  SubFooterText,
} from "./Footer.styled";

import React from 'react';
import { useState } from 'react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // отправка данных на сервер
    setIsSubscribed(true);
    if (isSubscribed) {
      alert('Subscribed Successful');
      setEmail('');
    }
  };

  return (
    <footer>
      <FooterSection>
        <Container>
          <LogoCapLinkFormWrap>
          <LogoCapLinkWrap>
          <LogoCapWrap>
            <LogoLink to="/">
              <LogoImg src={logo} alt='logo' width={32} />
              <LogoTitle>So Yummy</LogoTitle>
            </LogoLink>

            <AppCapabilitiesList>
              <AppCapabilitiesItem>
                <p>Database of recipes that can be replenished</p>
              </AppCapabilitiesItem>

              <AppCapabilitiesItem>
                <p>Flexible search for desired and unwanted ingredients</p>
              </AppCapabilitiesItem>

              <AppCapabilitiesItem>
                <p>Ability to add your own recipes with photos</p>
              </AppCapabilitiesItem>

              <AppCapabilitiesItem>
                <p>Convenient and easy to use</p>
              </AppCapabilitiesItem>

            </AppCapabilitiesList>

          </LogoCapWrap>

          <nav>
            <FooterLinkWrap>
              <li><FooterLink to='/'>Ingredients</FooterLink></li>
              <li><FooterLink to='/'>Add recipes</FooterLink></li>
              <li><FooterLink to='/'>My recipes</FooterLink></li>
              <li><FooterLink to='/'>Favorite</FooterLink></li>
              <li><FooterLink to='/'>Shopping list</FooterLink></li>
            </FooterLinkWrap>
            </nav>
            </LogoCapLinkWrap>

            <SubscFomrWrap>
            <SubscribeWrap>
              <h4>Subscribe to our Newsletter</h4>
              <p>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
            </SubscribeWrap>

          <FormFooter onSubmit={handleSubmit}>
            <FormFooterInput
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder='Enter your email address'
              required
            />
            <FormFooterBtn type="submit">Subscribe</FormFooterBtn>
            </FormFooter>
            </SubscFomrWrap>

            </LogoCapLinkFormWrap>

          <SocialWrap>
            <SocialIcon>
              <SocialLink to='https://www.facebook.com/' target='_blank'>
                <SocialImg src={facebook} alt="facebook-logo" width={20} />
              </SocialLink>
            </SocialIcon>
            <SocialIcon>
              <SocialLink to='https://www.youtube.com/' target='_blank'>
                <SocialImg src={youtube} alt="youtube-logo" width={20} />
              </SocialLink>
            </SocialIcon>
            <SocialIcon>
              <SocialLink to='https://twitter.com/' target='_blank'>
                <SocialImg src={twitter} alt="twitter-logo" width={20} />
              </SocialLink>
            </SocialIcon>
            <SocialIcon>
              <SocialLink to='https://www.instagram.com/' target='_blank'>
                <SocialImg src={instagram} alt="instagram-logo" width={20} />
              </SocialLink>
            </SocialIcon>
          </SocialWrap>

        </Container>
      </FooterSection>

      <SubFooter>
        <Container>
          <SubFooterText>
            <p>© 2023 All Rights Reserved.</p>
            <p>Terms of Service</p>
          </SubFooterText>
        </Container>
        </SubFooter>
    </footer>
  );
}
