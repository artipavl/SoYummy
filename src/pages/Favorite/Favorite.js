import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteList from 'components/FavoriteList/FavoriteList';
import MainTitle from 'components/MainTitle/MainTitle';
import { Page } from './Favorite.styled';
import { Modal } from 'components/Modal/Modal';
import { selectorAchievements } from '../../redux/selectors';

import { checkLocalStorage } from 'utils';
const Favorite = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const achievements = useSelector(selectorAchievements);

  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem('modalFavoritesShown');
    checkLocalStorage('modalFavoritesShown');
    let timeoutId = null;
    if (achievements?.favoritesCount >= 1 && !hasModalBeenShown && isFirst) {
      timeoutId = setTimeout(() => {
        setIsModalOpen(true);
        setIsFirst(false);
        localStorage.setItem('modalFavoritesShown', 'true');
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [achievements?.favoritesCount, isFirst]);

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Page>
      {isModalOpen && (
        <Modal
          text="You have created your first list of favorite recipes!"
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
      <MainTitle text="Favorite" />
      <FavoriteList />
    </Page>
  );
};

export default Favorite;
