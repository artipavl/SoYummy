import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import {
  Container,
  Title,
  List,
  CardLink,
  ImgBox,
  Card,
  TitleBox,
  TitleCard,
  BoxPagination,
  BoxTitle,
} from 'components/Categories/Categories.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectorSwicherTheme } from 'redux/selectors';

import { LoaderDiv } from 'components/IngredientsShoppingList/IngredientsShoppingList.styled';

import { Loader } from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import { Black1, Green1, Green2 } from 'components/MainTitle/MainTitle.styled';
import { fetchDataCategoryList } from 'redux/categoryPage/categorySlice';
import { fetchDataCategoryItem } from 'redux/categoryPage/itemSlice';

export const Categories = () => {
  const [value, setValue] = useState(0);
  const [oneParam] = useState(useParams().categoryName);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { dataList } = useSelector(state => state.categoryList);
  const { dataItem, isLoading } = useSelector(state => state.categoryItem);

  useEffect(() => {
    if (dataList.length === 0) {
      dispatch(fetchDataCategoryList());
    }
  }, [dataList, dispatch]);

  const theme = useSelector(selectorSwicherTheme);

  const numberedArray = dataList.map((element, index) => {
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
    setPage(1);
    setValue(newValue);
  };

  const nameEl = numberedArray[value]?.value;

  useEffect(() => {
    dispatch(fetchDataCategoryItem({ nameEl, page }));
  }, [dispatch, nameEl, page]);

  useEffect(() => {
    if (dataItem.total === undefined) return;
    const pageCounts = Math.ceil(dataItem?.total / 8);
    if (pageCounts > 1) {
      setTotalPage(pageCounts);
    } else {
      setTotalPage(1);
    }
  }, [dataItem]);
  if (dataItem.result === undefined) return;

  const { result } = dataItem;

  const handleChangePage = e => {
    setPage(e.selected + 1);
    scroll.scrollToTop();
  };

  return (
    <>
      <Container>
        <BoxTitle>
          <Title>Categories</Title>
          <Green1></Green1>
          <Green2></Green2>
          <Black1></Black1>
        </BoxTitle>

        <Box
          sx={{
            maxWidth: '100%',
            marginTop: { xs: '50px', lg: '100px' },
            borderBottom: '1px solid #BDBDBD',
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
                onClick={() => navigate(`/categories/${item.value}`)}
                sx={{
                  '&.Mui-selected': {
                    color: '#8BAA36',
                  },
                  color:
                    theme === 'light' ? '#BDBDBD' : `rgba(250, 250, 250, 0.6)`,
                }}
                key={item.id}
                label={item.value}
              />
            ))}
          </Tabs>
        </Box>
        {isLoading ? (
          <LoaderDiv>
            <Loader />
          </LoaderDiv>
        ) : (
          <>
            <List>
              {result.map(({ _id, title, thumb }) => (
                <li key={_id}>
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
            <BoxPagination>
              {totalPage > 1 && (
                <Pagination
                  pageCount={totalPage}
                  forcePage={page}
                  change={handleChangePage}
                />
              )}
            </BoxPagination>
          </>
        )}
      </Container>
    </>
  );
};
