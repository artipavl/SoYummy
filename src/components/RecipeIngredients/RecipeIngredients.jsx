import { Container } from 'reusableComponents/Container/Container.styled';
import { FlexWrapper, IngredientItem, IngredientName, IngredientNumber, IngredientPlaceholder, IngredientsHeader, IngredientsSection, MarginText, TitleText } from './RecipeIngredients.styled';
import placeholders from 'images/icons/placeholders.svg'
const RecipeIngredients = () => {
  return (
    <IngredientsSection>
      <Container>
        <IngredientsHeader>
          <TitleText>Ingredients</TitleText>
          <FlexWrapper>
          <MarginText>Number</MarginText>
          <TitleText>Add to list</TitleText>
          </FlexWrapper>
        </IngredientsHeader>
        {/* Ingredients list from API */}
        <ul>
          <IngredientItem>
            {/* ImageFromAPi ? <ImageFromApi/> : <Placeholder/> */}
            <FlexWrapper>
              <IngredientPlaceholder>
              <use href={placeholders + '#ph-apple-60px'}/>
            </IngredientPlaceholder>
            <img src='' alt="" />
            <IngredientName>Salmon</IngredientName>
            </FlexWrapper>
            <FlexWrapper>
              <IngredientNumber>2 chopped</IngredientNumber>
              <input type="checkbox" />{' '}
            </FlexWrapper>
          </IngredientItem>
                    <IngredientItem>
            {/* ImageFromAPi ? <ImageFromApi/> : <Placeholder/> */}
            <FlexWrapper>
              <IngredientPlaceholder>
              <use href={placeholders + '#ph-apple-60px'}/>
            </IngredientPlaceholder>
            <img src='' alt="" />
            <IngredientName>Salmon</IngredientName>
            </FlexWrapper>
            <FlexWrapper>
              <IngredientNumber>2 chopped</IngredientNumber>
              <input type="checkbox" />{' '}
            </FlexWrapper>
          </IngredientItem>
                      <IngredientItem>
            {/* ImageFromAPi ? <ImageFromApi/> : <Placeholder/> */}
            <FlexWrapper>
              <IngredientPlaceholder>
              <use href={placeholders + '#ph-apple-60px'}/>
            </IngredientPlaceholder>
            <img src='' alt="" />
            <IngredientName>Salmon</IngredientName>
            </FlexWrapper>
            <FlexWrapper>
              <IngredientNumber>2 chopped</IngredientNumber>
              <input type="checkbox" />{' '}
            </FlexWrapper>
          </IngredientItem>
                    <IngredientItem>
            {/* ImageFromAPi ? <ImageFromApi/> : <Placeholder/> */}
            <FlexWrapper>
              <IngredientPlaceholder>
              <use href={placeholders + '#ph-apple-60px'}/>
            </IngredientPlaceholder>
            <img src='' alt="" />
            <IngredientName>Salmon</IngredientName>
            </FlexWrapper>
            <FlexWrapper>
              <IngredientNumber>2 chopped</IngredientNumber>
              <input type="checkbox" />{' '}
            </FlexWrapper>
          </IngredientItem>
        </ul>
      </Container>
    </IngredientsSection>
  );
};

export default RecipeIngredients;
