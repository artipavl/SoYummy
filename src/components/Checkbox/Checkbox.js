import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './Checkbox.styled';
import checkbox from 'images/icons/checkbox.svg';

const { useState, useEffect } = require('react');

const Checkbox = ({ ingrId, shopList }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = event => {
    setChecked(event.target.checked);
  };

  const isChecked = id => {
    shopList.reduce((acc, item) => {
      console.log(item._id);
      if (item._id === id) {
        acc = true;
        return acc;
      }
      return acc;
    }, false);
  };

  useEffect(() => {
    const isChecked = shopList.reduce((acc, item) => {
      console.log(`itemId: ${item.ingredientId}`);
      console.log(`ingrId: ${ingrId}`);
      if (item.ingredientId === ingrId) {
        acc = true;
        return acc;
      }
      return acc;
    }, false);
    console.log(isChecked);
  }, []);

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
