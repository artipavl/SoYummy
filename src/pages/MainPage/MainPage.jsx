import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { СhooseYourBreakfast } from 'components/Main/СhooseYourBreakfast/СhooseYourBreakfast';
import { Search } from 'components/Main/Search/Search';
import { ConteinerFlex, ConteinerGrid } from './MainPage.styled';
import { PreviewCategories } from 'components/Main/PreviewCategories/PreviewCategories';
import { Hero } from 'components/Main/Hero/Hero';
import { Modal } from 'components/Modal/Modal';
import { selectorAchievements } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { checkLocalStorage } from 'utils';

export const MainPage = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const achievements = useSelector(selectorAchievements);

  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem('modalShown');
    checkLocalStorage('modalShown');
    let timeoutId = null;

    if (
      (achievements?.annexedDays === 1 ||
        achievements?.annexedDays === 30 ||
        achievements?.annexedDays === 100) &&
      !hasModalBeenShown &&
      isFirst
    ) {
      timeoutId = setTimeout(() => {
        setIsModalOpen(true);
        setIsFirst(false);
        localStorage.setItem('modalShown', 'true');
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [achievements?.annexedDays, isFirst]);

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <ConteinerFlex>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            text={`You have been using the application for ${achievements?.annexedDays} days!`}
          />
        )}
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
