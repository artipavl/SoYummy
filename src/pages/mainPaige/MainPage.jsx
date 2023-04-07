/* "Компонент рендериться на маршрут /main
Зверстати головну сторінку (мобільна, планшет та десктопна версії), на якій повинні знаходитись контейнери для блоків:
 - СhooseYourBreakfast
 - Search
 - PreviewCategories" 
 */

import { СhooseYourBreakfast } from 'components/Main/СhooseYourBreakfast/СhooseYourBreakfast';
import { Search } from 'components/Main/Search/Search';
import { ConteinerFlex, ConteinerGrid } from './MainPage.styled';
import { PreviewCategories } from 'components/Main/PreviewCategories/PreviewCategories';

export const MainPage = () => {
  return (
    <><ConteinerFlex>

      <ConteinerGrid>
        <СhooseYourBreakfast />
        <Search />
      </ConteinerGrid>
        <PreviewCategories/>
    </ConteinerFlex>
    </>
  );
};
