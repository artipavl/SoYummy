import { Formik, FieldArray } from 'formik';
import { useState, useMemo } from 'react';
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
  WrapperSelectInput,
  SelectStyled,
  SelectDescription,
  SelectInput,
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
} from './AddRecipeForm.styled';

import { IngredientsInput } from './IngredientsForm/IngrdedientsForm';
import { AddRecipePreparation } from './RecipePreparation/AddRecipePreparation';
import { Loader } from 'components/Loader/Loader';

import { ReactComponent as UploadPhoto } from '../../images/icons/upload-photo.svg';

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
  const [category, setCategory] = useState([]);
  const [allIngredients, SetAllIngredients] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, SetIsLoading] = useState(false);

  const cookingTime = getCookingTime();

  const navigate = useNavigate();

  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setSelectedFile(file);
    setFieldValue('thumb', file);
  };

  useMemo(async () => {
    try {
      const categoryList = await getAllCategories();

      setCategory(categoryList);
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
                <InputField
                  name="title"
                  type="text"
                  value={values.title}
                  placeholder="Enter item title"
                  onBlur={e => setFieldValue('title', e.target.value)}
                />
                <Error name="title" component="p" />
                <InputField
                  name="description"
                  type="text"
                  placeholder="Enter about recipe"
                  onBlur={e => setFieldValue('description', e.target.value)}
                />
                <Error name="description" component="p" />
                <WrapperSelectInput>
                  <SelectDescription>Category</SelectDescription>
                  <SelectInput
                    name="category"
                    as={SelectStyled}
                    onBlur={e => setFieldValue('category', e.target.value)}
                  >
                    {category.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </SelectInput>
                </WrapperSelectInput>
                <Error name="category" component="p" />
                <WrapperSelectInput>
                  <SelectDescription>Cooking time</SelectDescription>
                  <SelectInput
                    name="time"
                    as={SelectStyled}
                    onBlur={e => setFieldValue('time', e.target.value)}
                  >
                    {cookingTime.map((item, idx) => (
                      <option key={idx} value={item}>
                        {`${item} min`}
                      </option>
                    ))}
                  </SelectInput>
                </WrapperSelectInput>
                <Error name="time" component="p" />
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
