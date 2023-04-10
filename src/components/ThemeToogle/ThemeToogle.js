import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';
import { themeSwicher } from 'redux/authOperations';
import { selectorSwicherTheme } from 'redux/selectors';
import styled from 'styled-components';


const StyledSwitch = styled(Switch)`
  box-shadow: inset 0 6px 8px 3px rgba(0,0,0,.1);
`;

export const ThemeToogle = () => {
  const dispatch = useDispatch();

  const theme = useSelector(selectorSwicherTheme);

  return (
    <StyledSwitch
      checked={theme === 'dark'}
      onChange={() => dispatch(themeSwicher())}
      onColor="#8BAA36"
      offColor="#EFEFEF"
      handleDiameter={22}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="inset 0 6px 8px 3px rgba(0,0,0,.1)"
      activeBoxShadow='inset 0 6px 8px 3px rgba(0,0,0,.1)'
      height={27}
      width={61}
      id="material-switch"

    />
  );
};



