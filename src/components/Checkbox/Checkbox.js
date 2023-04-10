import { useParams } from 'react-router-dom';
import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './Checkbox.styled';
import checkbox from 'images/icons/checkbox.svg';
import { addShopItem, removeShopItem } from 'api/services/axios/axiosService';

const { useState, useEffect } = require('react');

const Checkbox = ({ ingrId, shopList, ingrMeasure }) => {
  const [checked, setChecked] = useState(false);
  const { recipeId } = useParams();

  const handleCheckboxChange = event => {
    const shopItem = shopList.find(item => item.ingredientId === ingrId);
    setChecked(event.target.checked);
    checked
      ? removeShopItem(shopItem._id)
      : addShopItem(recipeId, ingrId, ingrMeasure);
  };

  useEffect(() => {
    const isChecked = shopList.reduce((acc, item) => {
      if (item.ingredientId === ingrId) {
        acc = true;
        return acc;
      }
      return acc;
    }, false);
    setChecked(isChecked);
  }, [ingrId, shopList]);

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
