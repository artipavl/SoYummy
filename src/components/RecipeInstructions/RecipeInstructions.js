import { nanoid } from '@reduxjs/toolkit';
import {
  ContentWrapper,
  DesktopFlex,
  InstructionItem,
  InstructionText,
  InstructionsList,
  InstructionsSection,
  InstructionsTitle,
  ItemNumber,
  RecipeImg,
} from './RecipeInstructions.styled';

const RecipeInstructions = ({ instructions, picture, alt }) => {
  return (
    <InstructionsSection>
      <DesktopFlex>
        <ContentWrapper>
          <InstructionsTitle>Recipe preparation</InstructionsTitle>
          {/* Preparation list from API */}
          <InstructionsList>
            {instructions.map(instruction => {
              return (
                <InstructionItem key={nanoid()}>
                  <ItemNumber>
                    {instructions.indexOf(instruction) + 1}
                  </ItemNumber>
                  <InstructionText>
                    {instruction}
                    {instructions.indexOf(instruction) !==
                      instructions.length - 1 && '.'}
                  </InstructionText>
                </InstructionItem>
              );
            })}
          </InstructionsList>
        </ContentWrapper>
        {picture ? (
          <RecipeImg src={picture} alt={alt}></RecipeImg>
        ) : (
          <RecipeImg
            src={'../images/placeholders.svg#ph-img-300px'}
            alt={alt}
          ></RecipeImg>
        )}
      </DesktopFlex>
    </InstructionsSection>
  );
};

export default RecipeInstructions;
