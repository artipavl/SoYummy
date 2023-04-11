export const getCookingTime = () => {
  let cookingTime = [];
  for (let i = 5; i <= 120; i += 5) {
    cookingTime.push(i);
  }
  return cookingTime;
};
