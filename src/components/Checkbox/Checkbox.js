import { getShopList } from 'api/services/axios/axiosService';
import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './Checkbox.styled';
import checkbox from 'images/icons/checkbox.svg';

const { useState, useEffect } = require('react');

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = event => {
    setChecked(event.target.checked);
  };

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
