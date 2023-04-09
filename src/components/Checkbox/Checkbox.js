import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './Checkbox.styled';
import checkbox from 'images/icons/checkbox.svg';

const { useState, useEffect } = require('react');

const Checkbox = props => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = event => {
    setChecked(event.target.checked);
  };

  // const isChecked = id => {
  //   console.log(props.shopList);
  //   console.log(id);
  //   props.shopList.reduce((acc, item) => {
  //     console.log(item._id);
  //     if (item._id === id) {
  //       acc = true;
  //       return acc;
  //     }
  //     return acc;
  //   }, false);
  // };

  useEffect(() => {
    console.log(props);
  }, [props]);

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
