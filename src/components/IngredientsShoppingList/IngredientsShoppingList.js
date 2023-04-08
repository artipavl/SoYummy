import { useState, useEffect } from 'react';
import { getShoppingList, deleteShoppingList } from '../../api/serviseApi';
import { Loader } from 'components/Loader/Loader';

import Cross from '../../images/icons/cross.svg';
import CrossWhite from '../../images/icons/cross_white.svg';
import IngredientIcon from '../../images/placeholder/ingredient.svg';

import {
  ShoppingList,
  ShoppingListItem,
  ShoppingListContainer,
  ShoppingListTitle,
  TitleName,
  RightBox,
  ItemBoxLeft,
  ItemBoxRight,
  ImageProduct,
  TitleProduct,
  DeleteBtn,
  MeasureProduct,
} from './IngredientsShoppingList.styled';

const IngredientsShoppingList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      setIsLoading(true);
      try {
        setProductList(await getShoppingList());
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProductList();
  }, []);

  const handleDeleteProduct = async _id => {
    try {
      await deleteShoppingList(_id);
      setProductList(productList.filter(item => item._id !== _id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ShoppingListContainer>
      <ShoppingListTitle>
        <TitleName>Products</TitleName>
        <RightBox>
          <TitleName>Number</TitleName>
          <TitleName>Remove</TitleName>
        </RightBox>
      </ShoppingListTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <ShoppingList>
          {productList.map(({ _id, ttl, thb, measure }) => (
            <ShoppingListItem key={_id}>
              <ItemBoxLeft>
                <ImageProduct
                  src={thb || IngredientIcon}
                  alt="Ingredient photo"
                />
                <TitleProduct>{ttl}</TitleProduct>
              </ItemBoxLeft>
              <ItemBoxRight>
                <MeasureProduct MeasureProduct>{measure} </MeasureProduct>
                <DeleteBtn onClick={() => handleDeleteProduct(_id)}>
                  <img src={CrossWhite || Cross} alt="Button delete" />
                </DeleteBtn>
              </ItemBoxRight>
            </ShoppingListItem>
          ))}
        </ShoppingList>
      )}
    </ShoppingListContainer>
  );
};

export default IngredientsShoppingList;
