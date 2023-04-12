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

const Checkbox = ({ ingrId, shopListProp, ingrMeasure }) => {
  const [checked, setChecked] = useState(false);
  const [shopList, setShopList] = useState([]);
  const { recipeId } = useParams();

  const handleCheckboxChange = async event => {
    setChecked(event.target.checked);
    if (checked) {
      await removeShopItem(shopItem._id);
    } else {
      const res = await addShopItem(recipeId, ingrId, ingrMeasure);
      const { result: newShopList } = res.data.data;
      setShopList(newShopList);
    }
  };

  const shopItem = useMemo(() => {
    return shopList.find(item => item.ingredientId === ingrId);
  }, [ingrId, shopList]);

  useEffect(() => {
    setShopList(shopListProp);
  }, [shopListProp]);

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
