import BtnJs from 'reusableComponents/BtnJs/BtnJs';
import clocks from 'images/icons/clocks.svg';
import { ButtonWrap, HeroSection, HeroTitle, IconClocks, RecepyDescr, RecipeTime, RecipeTimeWrapper} from './RecipeHero.styled';
import { Container } from 'reusableComponents/Container/Container.styled';

const RecipeHero = ({ title, description, onBtnClick, time }) => {
  return (
    <HeroSection>
      <Container>
        <HeroTitle>{title}</HeroTitle>
        <RecepyDescr>{description}</RecepyDescr>
        <ButtonWrap>
        <BtnJs
          name={'Add to favorites'}
          onClick={onBtnClick}
          variant={'transparent'}
        />
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
