import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { getCategoryPage, getCategoryList } from 'api/serviseApi';

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
  const [isLoading, setIsLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [itemArray, setItemArray] = useState([]);
  const [oneParam] = useState(useParams().categoryName);

  useEffect(() => {
    const fetchProductList = async () => {
      setIsLoading(true);
      try {
        setCategoryList(await getCategoryPage());
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProductList();
  }, []);

  const numberedArray = categoryList.map((element, index) => {
    return {
      id: index + 1,
      value: element,
    };
  });

  const obj = numberedArray.find(item => item.value === oneParam);
  const id = obj?.id;

  useEffect(() => {
    if (oneParam === undefined) return;
    setValue(id - 1);
  }, [id, oneParam]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const nameEl = numberedArray[value]?.value;

  useEffect(() => {
    if (nameEl === undefined) return;
    getCategoryList(nameEl).then(setItemArray);
  }, [nameEl]);

  return (
    <>
      <Container>
        <Title>Categories</Title>
        <Box
          sx={{
            maxWidth: '100%',
            marginTop: { xs: '50px', lg: '100px' },
            borderBottom: '1px solid var(--lineColor)',
            minHeight: '48px',
          }}
        >
          <Tabs
            value={value || 0}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
            sx={{
              '.MuiTabs-indicator': {
                backgroundColor: '#8BAA36',
              },
            }}
          >
            {numberedArray.map(item => (
              <Tab
                sx={{
                  '&.Mui-selected': {
                    color: '#8BAA36',
                  },
                  color: 'var(--categoriesForDarkToWhite)',
                }}
                key={item.id}
                label={item.value}
              />
            ))}
          </Tabs>
        </Box>

        <List>
          {itemArray.map(({ _id, title, thumb }) => (
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
