import { useEffect, useState } from 'react';
import IngredientsShoppingList from 'components/IngredientsShoppingList/IngredientsShoppingList';
import MainTitle from 'components/MainTitle/MainTitle';
import { Container } from './ShoppingList.styled';
import { Modal } from 'components/Modal/Modal';
import { selectorAchievements } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { checkLocalStorage } from 'utils';

const ShoppingList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const achievements = useSelector(selectorAchievements);

  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem('modalShoppingShown');
    checkLocalStorage('modalShoppingShown');
    let timeoutId = null;

    if (achievements?.shoppingListCount >= 1 && !hasModalBeenShown && isFirst) {
      timeoutId = setTimeout(() => {
        setIsModalOpen(true);
        setIsFirst(false);
        localStorage.setItem('modalShoppingShown', 'true');
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [achievements?.shoppingListCount, isFirst]);

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Container>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          text={'You have created your first shopping list!'}
        />
      )}
      <MainTitle text="Shopping List" />
      <IngredientsShoppingList />
    </Container>
  );
};

export default ShoppingList;
