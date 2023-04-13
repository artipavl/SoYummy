import { useLocation } from 'react-router-dom';

import { СhooseYourBreakfast } from 'components/Main/СhooseYourBreakfast/СhooseYourBreakfast';
import { Search } from 'components/Main/Search/Search';
import { ConteinerFlex, ConteinerGrid } from './MainPage.styled';
import { PreviewCategories } from 'components/Main/PreviewCategories/PreviewCategories';
import { Hero } from 'components/Main/Hero/Hero';

export const MainPage = () => {
  const location = useLocation();

  return (
    <>
      <ConteinerFlex>
        <Hero />
        <ConteinerGrid>
          <СhooseYourBreakfast />
          <Search />
        </ConteinerGrid>
        <PreviewCategories location={location} />
      </ConteinerFlex>
    </>
  );
};
