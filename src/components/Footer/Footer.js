import React from 'react';
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
  SocialWrap,
  SubFooter,
  SubFooterText,
} from './Footer.styled';

import FooterForm from './FooterForm';
import FooterSharedBg from './FooterSharedBg';
import SocialLinksComponent from 'reusableComponents/SocialLinks';

export const Footer = () => {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 3,
        // position: 'absolute',
        // bottom: 0,
        // width: '100%',
      }}
    >
      <FooterSharedBg />
      <FooterSection>
        <Container>
          <LogoCapLinkFormWrap>
            <LogoCapLinkWrap>
              <LogoCapWrap>
                <LogoLink to="/main">
                  <LogoImg src={logo} alt="logo" width={32} />
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
                  <li>
                    <FooterLink to="search?type=ingredients">
                      Ingredients
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/add">Add recipes</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/my">My recipes</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/favorite">Favorite</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/shopping-list">Shopping list</FooterLink>
                  </li>
                </FooterLinkWrap>
              </nav>
            </LogoCapLinkWrap>

            <SubscFomrWrap>
              <SubscribeWrap>
                <h4>Subscribe to our Newsletter</h4>
                <p>
                  Subscribe up to our newsletter. Be in touch with latest news
                  and special offers, etc.
                </p>
              </SubscribeWrap>

              <FooterForm />
            </SubscFomrWrap>
          </LogoCapLinkFormWrap>

          <SocialWrap>
            <SocialLinksComponent />
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
};
