import React from 'react';
import { useState } from 'react';

import logo from '../../images/icons/logo-Lite-Icon.svg';

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

  FacebookIconStyled,
  TwitterIconStyled,
  YoutubeIconStyled,
  InstagramIconStyled,

  SubFooter,
  SubFooterText,
} from "./Footer.styled";








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
                  <LogoLink to="/main">
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
                    <li><FooterLink to='/add'>Add recipes</FooterLink></li>
                    <li><FooterLink to='/my'>My recipes</FooterLink></li>
                    <li><FooterLink to='/favorite'>Favorite</FooterLink></li>
                    <li><FooterLink to='/shopping-list'>Shopping list</FooterLink></li>
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

                <SocialLink to='https://www.facebook.com/' target='_blank'>
                  <FacebookIconStyled/>
                </SocialLink>


                <SocialLink to='https://www.youtube.com/' target='_blank'>
                 <YoutubeIconStyled/>
                </SocialLink>


                <SocialLink to='https://twitter.com/' target='_blank'>
                  <TwitterIconStyled/>
                </SocialLink>

                <SocialLink to='https://www.instagram.com/' target='_blank'>
                  <InstagramIconStyled/>
                </SocialLink>


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
