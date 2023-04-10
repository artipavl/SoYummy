import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  padding: 3px;
  width: 10px;
  height: 10px;
  @media ${props => props.theme.device.tablet} {
    padding: 9px;
    width: 17px;
    height: 17px;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const StyledCheckbox = styled.div`
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;
  width: 16px;
  height: 16px;
  transition: all 250ms linear;

  @media ${props => props.theme.device.tablet} {
    width: 33px;
    height: 33px;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;
