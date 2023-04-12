import { useState, useEffect } from 'react';

import { getShoppingList } from '../../api/serviseApi';
import { Loader } from 'components/Loader/Loader';

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
  MeasureProduct,
  LoaderDiv,
  CloseIcon,
} from './IngredientsShoppingList.styled';
import { useDispatch } from 'react-redux';
import { removeIngredient } from 'redux/authOperations';

const IngredientsShoppingList = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const dispatch = useDispatch();

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

  const handleDeleteProduct = _id => {
    dispatch(removeIngredient({ _id: _id })).then(() => {
      setProductList(productList.filter(item => item._id !== _id));
    });
  };

  return (
    <ShoppingListContainer>
      {isLoading ? (
        <LoaderDiv>
          <Loader />
        </LoaderDiv>
      ) : (
        <>
          <ShoppingListTitle>
            <TitleName>Products</TitleName>
            <RightBox>
              <TitleName>Number</TitleName>
              <TitleName>Remove</TitleName>
            </RightBox>
          </ShoppingListTitle>
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
                  <button
                    type="button"
                    title="Delete item"
                    onClick={() => handleDeleteProduct(_id)}
                  >
                    <CloseIcon />
                  </button>
                </ItemBoxRight>
              </ShoppingListItem>
            ))}
          </ShoppingList>
        </>
      )}
    </ShoppingListContainer>
  );
};

export default IngredientsShoppingList;
