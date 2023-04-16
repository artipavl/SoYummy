import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataMain } from 'redux/mainPageSlice';

import {
  CardLink,
  ImgBox,
  Card,
  TitleBox,
  Title,
  Container,
  TitleCard,
  List,
  SeeAll,
  Box,
  Btn,
} from 'components/Main/PreviewCategories/PreviewCategories.styled';
import { NavLink } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { LoaderDiv } from 'components/IngredientsShoppingList/IngredientsShoppingList.styled';

export const PreviewCategories = ({ location }) => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(state => state.main);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchDataMain());
    }
  }, [dispatch, items]);

  const sortedRecipes = items.reduce((acc, curr) => {
    const { category, recipes } = curr;
    return { ...acc, [category]: recipes };
  }, {});

  const { Breakfast, Miscellaneous, Chicken, Dessert } = sortedRecipes;

  const variant = 'normal';

  return (
    <>
      <Container>
        {isLoading ? (
          <LoaderDiv>
            <Loader />
          </LoaderDiv>
        ) : (
          <>
            <Box>
              <Title>Breakfast</Title>
              <List>
                {Breakfast?.map(({ title, thumb, _id }) => (
                  <li key={title}>
                    <NavLink to={`/recipe/${_id}`}>
                      <ImgBox animation={title.length > 34}>
                        <Card alt={title} src={thumb} />
                        <TitleBox>
                          <TitleCard>{title}</TitleCard>
                        </TitleBox>
                      </ImgBox>
                    </NavLink>
                  </li>
                ))}
              </List>
              <SeeAll
                variant={variant}
                to={`/categories/Breakfast`}
                state={{ from: location }}
              >
                See all
              </SeeAll>
            </Box>
            <Box>
              <Title>Miscellaneous</Title>
              <List>
                {Miscellaneous?.map(({ title, thumb, _id }) => (
                  <li key={title}>
                    <CardLink to={`/recipe/${_id}`}>
                      <ImgBox animation={title.length > 34}>
                        <Card alt={title} src={thumb} />
                        <TitleBox>
                          <TitleCard>{title}</TitleCard>
                        </TitleBox>
                      </ImgBox>
                    </CardLink>
                  </li>
                ))}
              </List>
              <SeeAll
                variant={variant}
                to={`/categories/Miscellaneous`}
                state={{ from: location }}
              >
                See all
              </SeeAll>
            </Box>
            <Box>
              <Title>Chicken</Title>
              <List>
                {Chicken?.map(({ title, thumb, _id }) => (
                  <li key={title}>
                    <CardLink to={`/recipe/${_id}`}>
                      <ImgBox animation={title.length > 34}>
                        <Card alt={title} src={thumb} />
                        <TitleBox>
                          <TitleCard>{title}</TitleCard>
                        </TitleBox>
                      </ImgBox>
                    </CardLink>
                  </li>
                ))}
              </List>
              <SeeAll
                variant={variant}
                to={`/categories/Chicken`}
                state={{ from: location }}
              >
                See all
              </SeeAll>
            </Box>
            <Box>
              <Title>Dessert</Title>
              <List>
                {Dessert?.map(({ title, thumb, _id }) => (
                  <li key={title}>
                    <CardLink to={`/recipe/${_id}`}>
                      <ImgBox animation={title.length > 34}>
                        <Card alt={title} src={thumb} />
                        <TitleBox>
                          <TitleCard>{title}</TitleCard>
                        </TitleBox>
                      </ImgBox>
                    </CardLink>
                  </li>
                ))}
              </List>
              <SeeAll
                variant={variant}
                to={`/categories/Dessert`}
                state={{ from: location }}
              >
                See all
              </SeeAll>
            </Box>
            <Btn to={`/categories`}>Other categories</Btn>
          </>
        )}
      </Container>
    </>
  );
};
