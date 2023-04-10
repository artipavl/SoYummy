import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import recipies from 'api/recipes/recipes.json';

import {
  Container,
  Title,
  List,
  CardLink,
  ImgBox,
  Card,
  TitleBox,
  TitleCard,
} from 'components/Categories/Categories.styled.js';

export const Categories = () => {
  const [value, setValue] = useState(0);

  const categories = recipies
    .filter(
      (recipe, index, self) =>
        index === self.findIndex(r => r.category === recipe.category)
    )
    .map(recipe => recipe.category);

  const numberedArray = categories.map((element, index) => {
    return {
      id: index + 1,
      value: element,
    };
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const nameCategory = numberedArray[value]?.value;

  const itemCategory = recipies.filter(item => item.category === nameCategory);

  return (
    <>
      <Container>
        <Title>Breakfast</Title>
        <Box
          sx={{
            width: '50%',
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
            sx={{
              '& .Mui-selected': {
                color: 'yellow',
                borderColor: 'yellow !important', 
              },
              borderBottomColor: 'yellow',
            }}
          >
            {numberedArray.map(item => (
              <Tab
                sx={{
                  color: 'red',
                  '&:hover, &focus': {
                    color: 'green',
                  },
                }}
                key={item.id}
                label={item.value}
              />
            ))}
          </Tabs>
        </Box>

        <List>
          {itemCategory.map(({ _id, title, thumb }) => (
            <li key={_id.$oid}>
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
      </Container>
    </>
  );
};
