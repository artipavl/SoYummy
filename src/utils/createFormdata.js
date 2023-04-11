export const createFormData = values => {
  const formData = new FormData();
  formData.append('title', values.title);
  formData.append('description', values.description);
  formData.append('category', values.category);
  formData.append('time', values.time);
  formData.append('thumb', values.thumb);
  formData.append('instructions', values.instructions);
  values.ingredients.forEach((ingredient, idx) => {
    formData.append(`ingredients[${idx}][id]`, ingredient.id);
    formData.append(`ingredients[${idx}][measure]`, ingredient.measure);
  });
  return formData;
};
