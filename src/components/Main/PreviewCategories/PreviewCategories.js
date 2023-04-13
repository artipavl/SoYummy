import { getMainPage } from 'api/serviseApi';
import { useState, useEffect } from 'react';

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

export const PreviewCategories = ({ location }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mainArray, setMainArray] = useState([]);
  console.log(isLoading);
  useEffect(() => {
    const fetchMainPage = async () => {
      setIsLoading(true);
      try {
        setMainArray(await getMainPage());
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMainPage();
  }, []);

  const sortedRecipes = mainArray.reduce((acc, curr) => {
    const { category, recipes } = curr;
    return { ...acc, [category]: recipes };
  }, {});

  const { Breakfast, Miscellaneous, Chicken, Dessert } = sortedRecipes;

  const variant = 'normal';
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};
