import { useSelector } from 'react-redux';
import { selectStatus, selectResults } from 'redux/selectors';

const GetDeviceImages = (width, height, device) => {
  const results = useSelector(selectResults);
  const { isResolved } = useSelector(selectStatus);

  const noRecipeFound = isResolved && results.length === 0;

  if (noRecipeFound) {
    return `
      background-image: none;

      &::before {
        content: '';
        background-image: url(${device});
        width: ${width}px;
        height: ${height}px;
      }

      @media ${props => props.theme.device.tablet} {
        &::before {
          background-image: url(${device});
          width: ${width}px;
          height: ${height}px;
        }
      }
    `;
  }
};

export default GetDeviceImages;
