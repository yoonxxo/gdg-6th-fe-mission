export const getItems = () => {
  return fetch("/data/item.json").then((response) => response.json());
};

export const getCategoryItems = () => {
  return fetch("/data/category.json").then((response) => response.json());
};

export const getPriceSelectedItems = () => {
  return fetch("/data/priceSelected.json").then((response) => response.json());
};

export const getSortedItems = () => {
  return fetch("/data/sorted.json").then((response) => response.json());
};

export const postItem = (newItem) => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  }).then((response) => response.json());
};

export const updateItem = (itemId, updatedItem) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedItem),
  }).then((response) => response.json());
};

export const deleteItem = (itemId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`, {
    method: "DELETE",
  }).then((response) => response.json());
};