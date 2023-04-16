const clearFieldInLocalStorage = fieldName => {
  localStorage.setItem(fieldName, 'false');
};

export const checkLocalStorage = fieldName => {
  const fieldValue = localStorage.getItem(fieldName);

  if (fieldValue === 'true') {
    const currentDate = new Date();

    const storedDate = new Date(localStorage.getItem('lastFieldClearDate'));

    const daysDifference = Math.floor(
      (currentDate - storedDate) / (24 * 60 * 60 * 1000)
    );

    if (daysDifference >= 30) {
      clearFieldInLocalStorage(fieldName);

      localStorage.setItem('lastFieldClearDate', currentDate.toString());
    }
  }
};
