export const getItems = async () => {
  const response = await fetch("/data/item.json");
  return await response.json();
};

export const getCategoryItems = async () => {
  const response = await fetch("/data/category.json");
  return await response.json();
};

export const getPriceSelectedItems = async () => {
  const response = await fetch("/data/priceSelected.json");
  return await response.json();
};

export const getSortedItems = async () => {
  const response = await fetch("/data/sorted.json");
  return await response.json();
};