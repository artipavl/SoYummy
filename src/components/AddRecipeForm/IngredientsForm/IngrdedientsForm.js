import { useState, useMemo } from 'react';

import {
  SelectIngredientWrapper,
  ListIngredientsShown,
  IngredientsFieldArray,
  IngredientsSelectInput,
  ItemIngredientsShown,
  MeasureContainer,
  MeasureInput,
  MeasureSelect,
  DeleteButton,
} from './IngredientsForm.styled';
import { ReactComponent as CloseIcon } from '../../../images/icons/close-icon.svg';
export const IngredientsInput = ({
  allIngredients,
  form,
  idx,
  onIngredientsChange,
  remove,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [ingredientId, SetIngredientId] = useState('');
  const [showFilteredItems, SetShowFilteredItems] = useState(false);
  const [formData, setFormData] = useState({
    combinedValue: '',
    textInputValue: '',
    selectInputValue: '',
  });

  const handleSearchInputChange = event => {
    if (event.target.value !== '') {
      setSearchValue(event.target.value);
      SetShowFilteredItems(true);
    } else {
      setSearchValue('');
      SetShowFilteredItems(false);
    }
  };

  const handleMeasureSelectChange = event => {
    const { value } = event.target;
    const combinedValue = `${formData.textInputValue} ${value}`;
    setFormData({
      ...formData,
      combinedValue,
      selectInputValue: value,
    });
  };
  const handleMeasureChange = event => {
    const { name, value } = event.target;
    const combinedValue = `${value} ${formData.selectInputValue}`;
    setFormData({
      ...formData,
      combinedValue,
      [name]: value,
    });
  };

  const filteredIngredients = useMemo(
    () => allIngredients.filter(({ ttl }) => ttl.includes(searchValue)),
    [allIngredients, searchValue]
  );

  const handleChangeInput = e => {
    e.preventDefault();
    const newIngredients = filteredIngredients.find(
      item => item.ttl === e.currentTarget.innerText
    );
    setSearchValue(e.target.value);
    SetShowFilteredItems(false);
    if (newIngredients) {
      const ingredients = {
        id: newIngredients._id,
        measure: formData.combinedValue,
      };
      onIngredientsChange(idx, ingredients);
      SetIngredientId(newIngredients._id);
    }
  };

  const handleBlurMeasure = () => {
    const ingredients = {
      id: ingredientId,
      measure: formData.combinedValue,
    };
    onIngredientsChange(idx, ingredients);
  };

  return (
    <>
      <SelectIngredientWrapper key={idx}>
        <IngredientsFieldArray>
          <IngredientsSelectInput
            type="text"
            value={searchValue}
            name={`ingredients[${idx}]`}
            onChange={handleSearchInputChange}
          />
          {showFilteredItems && (
            <ListIngredientsShown>
              {filteredIngredients.map(item => (
                <ItemIngredientsShown
                  key={item._id}
                  onClick={handleChangeInput}
                >
                  <option value={item.ttl}>{item.ttl}</option>
                </ItemIngredientsShown>
              ))}
            </ListIngredientsShown>
          )}
        </IngredientsFieldArray>
        <MeasureContainer>
          <MeasureInput
            type="text"
            name="textInputValue"
            value={formData.textInputValue}
            onChange={handleMeasureChange}
            onBlur={handleBlurMeasure}
          />
          <MeasureSelect
            as="select"
            name="selectInputValue"
            value={formData.selectInputValue}
            onChange={handleMeasureSelectChange}
            onBlur={handleBlurMeasure}
          >
            <option value="0">...</option>
            <option value="tbs">tbs</option>
            <option value="tsp">tsp</option>
            <option value="kg">kg</option>
            <option value="g">g</option>
          </MeasureSelect>
        </MeasureContainer>
        <DeleteButton onClick={() => remove(idx)}>
          <CloseIcon />
        </DeleteButton>
      </SelectIngredientWrapper>
    </>
  );
};
