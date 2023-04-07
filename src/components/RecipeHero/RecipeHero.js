import clocks from 'images/icons/clocks.svg';
import { ButtonWrap, FavoriteBtn, HeroSection, HeroTitle, IconClocks, RecepyDescr, RecipeTime, RecipeTimeWrapper} from './RecipeHero.styled';
import { Container } from 'reusableComponents/Container/Container.styled';

const RecipeHero = ({ title, description, onBtnClick, time }) => {
  return (
    <HeroSection>
      <Container>
        <HeroTitle>{title}</HeroTitle>
        <RecepyDescr>{description}</RecepyDescr>
        <ButtonWrap>
        <FavoriteBtn
          onClick={onBtnClick}
        >Add to favorites</FavoriteBtn>
        </ButtonWrap>

        <RecipeTimeWrapper>
          <IconClocks>
            <use href={clocks + '#clocks-desk'}></use>
          </IconClocks>
          {time && <RecipeTime>{`${time} min`}</RecipeTime>}
        </RecipeTimeWrapper>
      </Container>
    </HeroSection>
  );
};

export default RecipeHero;
