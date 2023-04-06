import { nanoid } from '@reduxjs/toolkit';
import { InstructionItem, InstructionText, InstructionsList, InstructionsSection, InstructionsTitle, RecipeImg } from './RecipeInstructions.styled';
import { Container } from 'reusableComponents/Container/Container.styled';

const RecipeInstructions = ({ instructions, picture, alt }) => {
  return (<InstructionsSection>
    <Container>
      <InstructionsTitle>Recipe preparation</InstructionsTitle>
        {/* Preparation list from API */}
        <InstructionsList>
          {instructions.map(instruction => {
            return (
              <InstructionItem key={nanoid()}>
                <InstructionText>{instruction}</InstructionText>
              </InstructionItem>
            );
          })}
        </InstructionsList>
        {picture ? (
          <img src={picture} alt={alt}></img>
        ) : (
          <RecipeImg
            src={'../images/placeholders.svg#ph-img-300px'}
            alt={alt}
          ></RecipeImg>
        )}
      </Container>
      </InstructionsSection>)
}

export default RecipeInstructions;