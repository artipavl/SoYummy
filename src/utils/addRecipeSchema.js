import * as Yup from 'yup';

export const addRecipeSchema = Yup.object().shape({
  title: Yup.string().required('Please enter the name of the recipe'),
  description: Yup.string().required(),
  category: Yup.string().required('Please select a recipe category'),
  time: Yup.string().required('Please select the cooking time'),
  thumb: Yup.mixed().optional().required('Please upload the image'),
  instructions: Yup.string().required('Please enter the recipe description'),
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string().required(),
        measure: Yup.string().required('Please specify the amount'),
      })
    )
    .min(1, 'Please add at least one ingredient'),
});
