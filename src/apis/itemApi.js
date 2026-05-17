export const getCategoryItems = () => {
  return fetch("/data/category.json")
    .then((response) => response.json());
};

export const getPriceSelectedItems = () => {
  return fetch("/data/priceSelected.json")
    .then((response) => response.json());
};

export const getSortedItems = () => {
  return fetch("/data/sorted.json")
    .then((response) => response.json());
};

// url을 실제 백엔드 url로 작성
export const getItems = () => { //상품 목록 가져오기
  return fetch("http://192.168.160.15:8080/products")
    .then((response) => response.json());
};

export const postItem = (newItem) => { // 상품 등록
  return fetch("http://192.168.160.15:8080/admin/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  }).then((response) => response.json());
};

export const updateItem = (itemId, updatedItem) => { // 재고 추가
  return fetch(`http://192.168.160.15:8080/admin/products/stock`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId: itemId,
      quantity: updatedItem.quantity,
    }),
  }).then((response) => response.json());
};

export const deleteItem = (itemId) => { // 상품 삭제
  return fetch(`http://192.168.160.15:8080/admin/products`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([itemId]),
  }).then((response) => response.json());
};

export const addCartItem = (cartItem) => { // 장바구니에 상품 추가
  return fetch("http://192.168.160.15:8080/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartItem),
  }).then((response) => response.json());
};

export const purchaseCartItems = (cartItems) => { // 장바구니 상품 구매
  return fetch("http://192.168.160.15:8080/products/purchase", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartItems),
  }).then((response) => response.json());
};