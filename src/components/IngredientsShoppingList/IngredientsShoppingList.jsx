import { useState, useEffect } from 'react';
import Cross from '../../images/icons/cross.svg';
import CrossWhite from '../../images/icons/cross_white.svg';

import {
  getShoppingList,
  // deleteShoppingList
} from '../../api/serviseApi';

import { Loader } from 'components/Loader/Loader';
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

  // const handleDeleteProduct = async () => {
  //   await deleteShoppingList();
  // };

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
                <ImageProduct src={thb || '#'} alt="Ingredient's photo" />
                <TitleProduct>{ttl}</TitleProduct>
              </ItemBoxLeft>
              <ItemBoxRight>
                <MeasureProduct MeasureProduct>{measure} </MeasureProduct>
                <DeleteBtn
                // onClick={handleDeleteProduct(_id)}
                >
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
