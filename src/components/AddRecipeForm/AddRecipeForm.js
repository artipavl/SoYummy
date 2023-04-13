import { Formik, FieldArray } from 'formik';
import { useState, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getAllCategories, getAllIngredients, addRecipe } from '../../api';
import { addRecipeSchema, getCookingTime, createFormData } from 'utils';
import {
  AddForma,
  ImageInput,
  InputField,
  Error,
  CustomInputContainer,
  ImageLabel,
  RecipePhoto,
  InputWrapper,
  OptionWrapper,
  WrapperArrow,
  StyledSelect,
  CategoryWrapper,
  SelectContainer,
  SelectItem,
  WrapperCookingTime,
  IngredientsContainer,
  TitleWrap,
  FormSectionTitle,
  IngredienLenght,
  IngredientsCount,
  ButtonClickIngredient,
  AddRecipeButton,
  LoaderContainer,
  AddIngredientButton,
  DeleteIngredientButton,
  Input,
} from './AddRecipeForm.styled';

import { IngredientsInput } from './IngredientsForm/IngrdedientsForm';
import { AddRecipePreparation } from './RecipePreparation/AddRecipePreparation';
import { Loader } from 'components/Loader/Loader';

import { ReactComponent as UploadPhoto } from '../../images/icons/upload-photo.svg';
import { ReactComponent as SelectArrow } from '../../images/icons/select-arrow.svg';

const initialValues = {
  title: '',
  description: '',
  category: '',
  time: '',
  ingredients: [{ id: '', measure: '' }],
  thumb: null,
  instructions: '',
};

export const AddRecipeForm = () => {
  const [categoryList, SetCategoryList] = useState([]);
  const [allIngredients, SetAllIngredients] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, SetIsLoading] = useState(false);
  const [isCategoryActive, SetIsCategoryActive] = useState(false);
  const [isTimeActive, SetIsTimeActive] = useState(false);

  const cookingTime = getCookingTime();

  const navigate = useNavigate();
  const inputRef = useRef();
  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setSelectedFile(file);
    setFieldValue('thumb', file);
  };

  useMemo(async () => {
    try {
      const categoryList = await getAllCategories();
      SetCategoryList(categoryList);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useMemo(async () => {
    try {
      const ingredients = await getAllIngredients();
      SetAllIngredients(ingredients);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    SetIsLoading(true);
    try {
      const data = createFormData(values);
      await addRecipe(data);
      resetForm();
      navigate('/my');
    } catch (error) {
      Notify.failure(`Something went wrong!${error.message}`);
    } finally {
      SetIsLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={addRecipeSchema}
      >
        {formik => {
          const { values, setFieldValue } = formik;
          console.log(values);
          const handlePreparationChange = description => {
            setFieldValue(`instructions`, description);
          };
          return (
            <AddForma>
              {isLoading && (
                <LoaderContainer>
                  <Loader />
                </LoaderContainer>
              )}
              <CustomInputContainer>
                {!selectedFile && (
                  <ImageLabel htmlFor="thumb">
                    <UploadPhoto />
                  </ImageLabel>
                )}
                <ImageInput
                  name="thumb"
                  id="thumb"
                  type="file"
                  onChange={event => handleFileChange(event, setFieldValue)}
                />

                {selectedFile && (
                  <div>
                    <RecipePhoto
                      src={URL.createObjectURL(selectedFile)}
                      alt="Preview"
                    />
                  </div>
                )}
                <Error name="thumb" component="p" />
              </CustomInputContainer>

              <InputWrapper>
                <Error name="title" component="p" />
                <InputField
                  name="title"
                  type="text"
                  value={values.title}
                  placeholder="Enter item title"
                  onBlur={e => setFieldValue('title', e.target.value)}
                />

                <Error name="description" component="p" />
                <InputField
                  name="description"
                  type="text"
                  placeholder="Enter about recipe"
                  onBlur={e => setFieldValue('description', e.target.value)}
                />

                <Error name="category" component="p" />
                <CategoryWrapper>
                  <Input
                    type="text"
                    readOnly="readonly"
                    placeholder="Category"
                  />
                  <StyledSelect
                    ref={inputRef}
                    onClick={() => SetIsCategoryActive(true)}
                  >
                    <OptionWrapper>{values.category}</OptionWrapper>
                    <WrapperArrow>
                      <SelectArrow width="20px" height="20px" />
                    </WrapperArrow>
                  </StyledSelect>
                  {isCategoryActive && (
                    <SelectContainer>
                      {categoryList.map((item, idx) => (
                        <SelectItem
                          key={idx}
                          onClick={() => {
                            setFieldValue('category', item);
                            SetIsCategoryActive(false);
                          }}
                        >
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContainer>
                  )}
                </CategoryWrapper>

                <Error name="time" component="p" />
                <WrapperCookingTime>
                  <Input
                    type="text"
                    readOnly="readonly"
                    placeholder="Cooking time"
                  />
                  <StyledSelect
                    ref={inputRef}
                    onClick={() => SetIsTimeActive(true)}
                  >
                    <OptionWrapper>
                      {values.time ? values.time + ' min' : ''}
                    </OptionWrapper>
                    <WrapperArrow>
                      <SelectArrow width="20px" height="20px" />
                    </WrapperArrow>
                  </StyledSelect>
                  {isTimeActive && (
                    <SelectContainer>
                      {cookingTime.map((time, idx) => (
                        <SelectItem
                          key={idx}
                          onClick={() => {
                            SetIsTimeActive(false);
                            setFieldValue('time', time);
                          }}
                        >
                          {time} min
                        </SelectItem>
                      ))}
                    </SelectContainer>
                  )}
                </WrapperCookingTime>
              </InputWrapper>

              <FieldArray name="ingredients">
                {fieldArrayProps => {
                  const { remove, form } = fieldArrayProps;

                  const { values } = form;
                  const { ingredients } = values;

                  const handleIngredientsChange = (idx, newIngredient) => {
                    setFieldValue(`ingredients[${idx}]`, {
                      id: newIngredient.id,
                      measure: newIngredient.measure,
                    });
                  };

                  return (
                    <>
                      <IngredientsContainer>
                        <TitleWrap>
                          <FormSectionTitle>Ingredients</FormSectionTitle>
                          <IngredienLenght>
                            <ButtonClickIngredient
                              type="buttom"
                              onClick={() => ingredients.pop()}
                            >
                              <DeleteIngredientButton />
                            </ButtonClickIngredient>

                            <IngredientsCount>
                              {ingredients.length}
                            </IngredientsCount>
                            <ButtonClickIngredient
                              type="buttom"
                              onClick={() =>
                                ingredients.push({
                                  _id: '',
                                  measure: '',
                                })
                              }
                            >
                              <AddIngredientButton />
                            </ButtonClickIngredient>
                          </IngredienLenght>
                        </TitleWrap>

                        {ingredients &&
                          ingredients.map((item, idx) => (
                            <IngredientsInput
                              key={idx}
                              form={form}
                              allIngredients={allIngredients}
                              idx={idx}
                              onIngredientsChange={handleIngredientsChange}
                              remove={remove}
                            />
                          ))}
                        {!ingredients && (
                          <Error name="ingredients" component="p" />
                        )}
                      </IngredientsContainer>
                    </>
                  );
                }}
              </FieldArray>
              <AddRecipePreparation
                onPreparationChange={handlePreparationChange}
              />
              {!values.instructions && (
                <Error name="instructions" component="p" />
              )}
              <AddRecipeButton type="submit">Add</AddRecipeButton>
            </AddForma>
          );
        }}
      </Formik>
    </>
  );
};

//  <WrapperCookingTime>
//    <Input
//      type="text"
//      placeholder="Cooking time"
//      style={{ cursor: 'pointer' }}
//    />
//    {formErrors?.time && <ErrMessage>{formErrors?.time}</ErrMessage>}

//    <SelectStyled ref={inputEl} onClick={e => setIsActiveTime(!isActiveTime)}>
//      <WrapperOption>{time}</WrapperOption>
//      <ArrowWrapper>
//        <Arrow width="20px" height="20px" />
//      </ArrowWrapper>
//    </SelectStyled>
//    {isActiveTime && (
//      <SelectContent style={{ width: '90px' }}>
//        {allTime.map((value, index) => (
//          <SelectItem
//            key={value + '' + index}
//            onClick={() => {
//              setTime(value);
//              setIsActiveTime(false);
//            }}
//            color={value === time && theme === 'light' ? '#8BAA36' : '#000000'}
//          >
//            {value}
//          </SelectItem>
//        ))}
//      </SelectContent>
//    )}
//  </WrapperCookingTime>;
