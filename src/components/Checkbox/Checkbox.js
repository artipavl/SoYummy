import { useParams } from 'react-router-dom';
import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './Checkbox.styled';
import checkbox from 'images/icons/checkbox.svg';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addIngredient, removeIngredient } from 'redux/authOperations';

const { useState, useEffect } = require('react');

const Checkbox = ({ ingrId, shopListProp, ingrMeasure }) => {
  const { recipeId } = useParams();

  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleCheckboxChange = async event => {
    setChecked(event.target.checked);
    if (checked) {
      dispatch(removeIngredient({ _id: shopItem._id }));
    } else {
      dispatch(
        addIngredient({
          recipeId,
          ingredientId: ingrId,
          measure: ingrMeasure,
        })
      );
    }
  };

  const shopItem = useMemo(() => {
    return shopListProp.find(item => item.ingredientId === ingrId);
  }, [ingrId, shopListProp]);

  useEffect(() => {
    shopItem ? setChecked(true) : setChecked(false);
  }, [shopItem]);

  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={handleCheckboxChange} />
      <StyledCheckbox checked={checked}>
        <Icon>
          <use href={checkbox + '#pick'} />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;
