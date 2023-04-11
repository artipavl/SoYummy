import { useParams } from 'react-router-dom';
import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './Checkbox.styled';
import checkbox from 'images/icons/checkbox.svg';
import { addShopItem, removeShopItem } from 'api/services/axios/axiosService';
import { useMemo } from 'react';

const { useState, useEffect } = require('react');

const Checkbox = ({ ingrId, shopList, ingrMeasure }) => {
  const [checked, setChecked] = useState(false);
  // const [shopItem, setShopItem] = useState([]);
  const { recipeId } = useParams();

  const handleCheckboxChange = event => {
    setChecked(event.target.checked);
    checked
      ? removeShopItem(shopItem._id)
      : addShopItem(recipeId, ingrId, ingrMeasure);
  };
  const shopItem = useMemo(() => {
    return shopList.find(item => item.ingredientId === ingrId);
  }, [ingrId, shopList]);

  useEffect(() => {
    shopItem ? setChecked(true) : setChecked(false);
    // shopItem && setShopItem(shopItem);
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
