import logoIcon from '../../images/icons/logo_Desktop.svg'

import { StartScreenSection, StartScreenLogo, StartSubtitle, StartTitle, StartNav, StyledLink } from './StartScreen.styled'

export const StartScreen = () => {
  return (
    <StartScreenSection>
      <StartScreenLogo src={logoIcon} alt="logo" width={44} />
      <StartSubtitle>Welcome to the app!</StartSubtitle>
      <StartTitle>This app offers more than
        just a collection of recipes - it is designed to be your very own digital cookbook.
        You can easily save and retrieve your own recipes at any time.</StartTitle>
      <StartNav>
        <StyledLink to="/">Registration</StyledLink>
        <StyledLink to="/">Sing In</StyledLink>
      </StartNav>
    </StartScreenSection>
  );
}
