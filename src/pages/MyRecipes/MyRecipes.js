import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import MainTitle from 'components/MainTitle/MainTitle';
import { Page } from '../Favorite/Favorite.styled';
import { Modal } from 'components/Modal/Modal';
import { selectorAchievements } from '../../redux/selectors';

import { checkLocalStorage } from 'utils';

const MyRecipes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const achievements = useSelector(selectorAchievements);

  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem('modalOwnShown');
    checkLocalStorage('modalOwnShown');
    let timeoutId = null;

    if (achievements?.ownCount === 1 && !hasModalBeenShown && isFirst) {
      timeoutId = setTimeout(() => {
        setIsModalOpen(true);
        setIsFirst(false);
        localStorage.setItem('modalOwnShown', 'true');
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [achievements?.ownCount, isFirst]);

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Page>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          text={'You added your first recipe!!'}
        />
      )}
      <MainTitle text="My recipes" />
      <MyRecipesList />
    </Page>
  );
};

export default MyRecipes;
