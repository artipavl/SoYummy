/* "Компонент рендериться на маршрут /main
Зверстати головну сторінку (мобільна, планшет та десктопна версії), на якій повинні знаходитись контейнери для блоків:
 - СhooseYourBreakfast
 - Search
 - PreviewCategories" 
 */

import { useLocation } from 'react-router-dom';


import { СhooseYourBreakfast } from 'components/Main/СhooseYourBreakfast/СhooseYourBreakfast';
import { Search } from 'components/Main/Search/Search';
import { ConteinerFlex, ConteinerGrid } from './MainPage.styled';
import { PreviewCategories } from 'components/Main/PreviewCategories/PreviewCategories';

export const MainPage = () => {

  const location = useLocation();

  return (
    <>
      <ConteinerFlex>
        <ConteinerGrid>
          <СhooseYourBreakfast />
          <Search />
        </ConteinerGrid>
        <PreviewCategories location={location} />
      </ConteinerFlex>
    </>
  );
};
