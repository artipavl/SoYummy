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
  const [categoryList, setCategoryList] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCategoryActive, setIsCategoryActive] = useState(false);
  const [isTimeActive, setIsTimeActive] = useState(false);

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
      setCategoryList(categoryList);

      const ingredients = await getAllIngredients();
      setAllIngredients(ingredients);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  const handlePreparationChange = (description, setFieldValue) => {
    setFieldValue(`instructions`, description);
  };
  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const data = createFormData(values);
      await addRecipe(data);
      resetForm();
      navigate('/my');
    } catch (error) {
      Notify.failure(`Something went wrong!${error.message}`);
    } finally {
      setIsLoading(false);
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
                  onChange={e => setFieldValue('description', e.target.value)}
                />

                <Error name="category" component="p" />
                <CategoryWrapper>
                  <Input
                    type="text"
                    readOnly="readonly"
                    placeholder="Category"
                    ref={inputRef}
                  />
                  <StyledSelect
                    ref={inputRef}
                    onClick={() => {
                      setIsCategoryActive(!isCategoryActive);
                      if (isTimeActive) {
                        setIsTimeActive(false);
                      }
                    }}
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
                          isSelect={values.category === item}
                          onClick={() => {
                            setFieldValue('category', item);
                            setIsCategoryActive(false);
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
                    onClick={() => {
                      setIsTimeActive(!isTimeActive);
                      if (isCategoryActive) {
                        setIsCategoryActive(false);
                      }
                    }}
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
                          isSelect={values.time === time}
                          onClick={() => {
                            setIsTimeActive(false);
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
                              values={values}
                              onIngredientsChange={handleIngredientsChange}
                              remove={remove}
                            />
                          ))}
                      </IngredientsContainer>
                    </>
                  );
                }}
              </FieldArray>
              <AddRecipePreparation
                onPreparationChange={handlePreparationChange}
                setFieldValue={setFieldValue}
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
