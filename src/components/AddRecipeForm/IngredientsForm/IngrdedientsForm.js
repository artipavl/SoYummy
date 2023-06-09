import { useState, useMemo, useRef, useEffect, useCallback } from 'react';

import {
  SelectIngredientWrapper,
  ListIngredientsShown,
  IngredientsFieldArray,
  IngredientsSelectInput,
  ItemIngredientsShown,
  WrapperMeasureSelect,
  MeasureContainer,
  MeasureInput,
  MeasureSelect,
  SelectContainer,
  SelectItem,
  StyledSelect,
  DeleteButton,
  WrapperArrow,
  OptionWrapper,
  CloseIcon,
} from './IngredientsForm.styled';
import { ReactComponent as SelectArrow } from '../../../images/icons/select-arrow.svg';

export const IngredientsInput = ({
  allIngredients,
  idx,
  onIngredientsChange,
  values,
  remove,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [ingredientId, setIngredientId] = useState('');
  const [showFilteredItems, setShowFilteredItems] = useState(false);
  const [isMeasure, setIsMeasure] = useState(false);
  const [formData, setFormData] = useState({
    combinedValue: '',
    textInputValue: '',
    selectInputValue: '',
  });

  const measureRef = useRef();
  const measureArray = ['tbs', 'tsp', 'kg', 'g'];

  const handleSearchInputChange = event => {
    if (event.target.value.trim() !== '') {
      setSearchValue(event.target.value.trim());
      setShowFilteredItems(true);
    } else {
      setSearchValue('');
      setShowFilteredItems(false);
    }
  };

  const handleMeasureSelectChange = event => {
    const { value } = event.target;
    const combinedValue = `${formData.textInputValue} ${value}`;

    setFormData(prevFormData => ({
      ...prevFormData,
      combinedValue,
      selectInputValue: value,
    }));

    setIsMeasure(false);
  };

  const prevOnIngredientsChangeRef = useRef(onIngredientsChange);
  if (prevOnIngredientsChangeRef.current !== onIngredientsChange) {
    prevOnIngredientsChangeRef.current = onIngredientsChange;
  }

  const handleIngredientsChange = useCallback((idx, ingredients) => {
    prevOnIngredientsChangeRef.current(idx, ingredients);
  }, []);

  useEffect(() => {
    const ingredients = {
      id: ingredientId,
      measure: formData.combinedValue,
    };
    handleIngredientsChange(idx, ingredients);
  }, [formData.combinedValue, ingredientId, idx, handleIngredientsChange]);

  const handleMeasureChange = event => {
    const { name, value } = event.target;
    const combinedValue = `${value} ${formData.selectInputValue}`;
    setFormData(prevFormData => ({
      ...prevFormData,
      combinedValue,
      [name]: value,
    }));
  };

  const filteredIngredients = useMemo(
    () =>
      allIngredients.filter(({ ttl }) =>
        ttl.toLowerCase().includes(searchValue.trim().toLowerCase())
      ),
    [allIngredients, searchValue]
  );

  const handleChangeInput = e => {
    e.preventDefault();
    const newIngredients = filteredIngredients.find(
      item => item.ttl === e.currentTarget.innerText
    );
    setSearchValue(e.target.value);
    setShowFilteredItems(false);
    if (newIngredients) {
      setIngredientId(newIngredients._id);
    }
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
          />
          <MeasureSelect type="text" readOnly />
          <WrapperMeasureSelect>
            <StyledSelect
              ref={measureRef}
              onClick={() => setIsMeasure(!isMeasure)}
            >
              <OptionWrapper>{formData.selectInputValue}</OptionWrapper>
              <WrapperArrow>
                <SelectArrow width="20px" height="20px" />
              </WrapperArrow>
            </StyledSelect>
            {isMeasure && (
              <SelectContainer>
                {measureArray.map((item, ind) => (
                  <SelectItem
                    key={ind}
                    isSelect={formData.selectInputValue === item}
                    onClick={handleMeasureSelectChange}
                  >
                    <option value={item}>{item}</option>
                  </SelectItem>
                ))}
              </SelectContainer>
            )}
          </WrapperMeasureSelect>
        </MeasureContainer>
        <DeleteButton onClick={() => remove(idx)}>
          <CloseIcon />
        </DeleteButton>
      </SelectIngredientWrapper>
    </>
  );
};
