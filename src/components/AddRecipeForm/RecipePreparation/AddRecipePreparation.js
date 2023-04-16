import { useState } from 'react';
import {
  FormSectionTitle,
  RecipeTextarea,
  PreparationWrapper,
} from './AddRecipePreparation.styled';

export const AddRecipePreparation = ({
  onPreparationChange,
  setFieldValue,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = e => {
    setInputValue(e.target.value);
    if (inputValue) {
      onPreparationChange(inputValue, setFieldValue);
    }
  };

  return (
    <PreparationWrapper>
      <FormSectionTitle>Recipe Preparation</FormSectionTitle>
      <RecipeTextarea
        as="textarea"
        placeholder="Enter recipe"
        value={inputValue}
        onChange={handleChangeInput}
      />
    </PreparationWrapper>
  );
};
