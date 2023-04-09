import recipies from './recipes.json';

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
} from 'components/Main/PreviewCategories/PreviewCategories.styled';
import { RoundedButton } from 'reusableComponents/Btn/Btn';

export const PreviewCategories = () => {
  const filterBreakfast = recipies.filter(item =>
    item.tags.includes('Breakfast')
  );

  const filterMiscellaneous = recipies.filter(
    item => item.category === 'Miscellaneous'
  );

  
  const filterChicken = recipies.filter(
    item => item.category === 'Chicken'
  );
  
  const filterDesserts = recipies.filter(item => item.category === 'Dessert');




  const variant = 'normal';
  return (
    <>
      <Container>
        <Box>
          <Title>Breakfast</Title>
          <List>
            {filterBreakfast.map(({ title, thumb }) => (
              <li key={title}>
                <CardLink>
                  <ImgBox>
                    <Card alt={title} src={thumb} />
                    <TitleBox>
                      <TitleCard>{title}</TitleCard>
                    </TitleBox>
                  </ImgBox>
                </CardLink>
              </li>
            ))}
          </List>
          <SeeAll variant={variant} to={'/main'}>
            See all
          </SeeAll>
        </Box>
        <Box>
          <Title>Miscellaneous</Title>
          <List>
            {filterMiscellaneous.map(({ title, thumb }) => (
              <li key={title}>
                <CardLink>
                  <ImgBox>
                    <Card alt={title} src={thumb} />
                    <TitleBox>
                      <TitleCard>{title}</TitleCard>
                    </TitleBox>
                  </ImgBox>
                </CardLink>
              </li>
            ))}
          </List>
          <SeeAll variant={variant} to={'/main'}>
            See all
          </SeeAll>
        </Box>
        <Box>
          <Title>Chicken</Title>
          <List>
            {filterChicken.map(({ title, thumb }) => (
              <li key={title}>
                <CardLink>
                  <ImgBox>
                    <Card alt={title} src={thumb} />
                    <TitleBox>
                      <TitleCard>{title}</TitleCard>
                    </TitleBox>
                  </ImgBox>
                </CardLink>
              </li>
            ))}
          </List>
          <SeeAll variant={variant} to={'/main'}>
            See all
          </SeeAll>
        </Box>
        <Box>
          <Title>Desserts</Title>
          <List>
            {filterDesserts.map(({ title, thumb }) => (
              <li key={title}>
                <CardLink>
                  <ImgBox>
                    <Card alt={title} src={thumb} />
                    <TitleBox>
                      <TitleCard>{title}</TitleCard>
                    </TitleBox>
                  </ImgBox>
                </CardLink>
              </li>
            ))}
          </List>
          <SeeAll variant={variant} to={'/main'}>
            See all
          </SeeAll>
        </Box>
        <RoundedButton title={'search'} />
      </Container>
    </>
  );
};
