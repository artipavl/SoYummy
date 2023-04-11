import logoIcon from '../../images/icons/logo_Desktop.svg';

import {
  StartScreenSection,
  Container,
  StartScreenLogo,
  StartSubtitle,
  StartTitle,
  StartNav,
  StyledLink,
} from './StartScreen.styled';

import {GoToTop} from 'utils/scrollToTop';

export const StartScreen = () => {
  return (
    <>
      <StartScreenSection>
        <Container>
          <StartScreenLogo src={logoIcon} alt="logo" width={44} />
          <StartSubtitle>Welcome to the app!</StartSubtitle>
          <StartTitle>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save and
            retrieve your own recipes at any time.
          </StartTitle>
          <StartNav>
            <StyledLink to="/register">Registration</StyledLink>
            <StyledLink to="/signin">Sign In</StyledLink>
          </StartNav>
        </Container>
      </StartScreenSection>
      <GoToTop />
    </>
  );
};
