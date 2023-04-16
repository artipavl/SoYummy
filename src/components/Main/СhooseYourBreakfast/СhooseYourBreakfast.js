import { useSelector } from 'react-redux';
import { selectorSwicherTheme } from 'redux/selectors';

import {
  BoxOne,
  BoxTwo,
  PlateBox,
  PlateTitleBox,
  Ptxt,
  So,
  Title,
  Yummy,
  Link,
} from './СhooseYourBreakfast.styled';



export const СhooseYourBreakfast = () => {

  const theme = useSelector(selectorSwicherTheme);

  return (
    <>
      <BoxOne>
          <So>So</So>
          <Yummy>Yummy</Yummy>
          <Ptxt>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </Ptxt>
      </BoxOne>
      <BoxTwo>
        <PlateBox>
          <PlateTitleBox>
            <Title>
              <span>Delicious and healthy</span> way to enjoy a variety of fresh
              ingredients in one satisfying meal
            </Title>
            <Link to={'/my'}>
              See recipes{' '}
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 6H13M13 6L8.5 1.5M13 6L8.5 10.5" 
                stroke={theme === 'light' ? '#3E4462' : `#FAFAFA`} />
              </svg>
            </Link>
          </PlateTitleBox>
          {/* <ArrowTab/> */}
        </PlateBox>
      </BoxTwo>
    </>
  );
};
