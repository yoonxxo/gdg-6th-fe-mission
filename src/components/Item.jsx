import { useState } from "react";

const Item = ({ item }) => { // item은 {itemName, price, quantity} 형태의 객체
  const [count, setCount] = useState("");
  const [added, setIsAdded] = useState(false); //false는 버튼 안눌린상태

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleCartClick = () => {
    setIsAdded(true); 
  }; 

  return (
    <div className="flex items-center justify-between w-[600px] border rounded-md px-6 py-4 mb-4">
      <div>
        <h3 className="font-bold">{item.itemName}</h3>
        <p className="text-sm text-gray-500">
          {item.price}원 남은 수량: {item.quantity}개
        </p>
      </div>

      <input
        type="number"
        placeholder="개수 입력..."
        value={count} //count는 input값이 바뀔 때마다 업데이트되서 화면에 보여줌
        onChange={handleChange} //onChange는 input값이 바뀔 때마다 handleChange함수 실행
        className="border rounded-md px-3 py-2 w-58 text-sm"
      />

      <button
        onClick={handleCartClick}
        disabled={added}
        className={`px-5 py-2 rounded-md text-white ${
          added ? "bg-gray-400" : "bg-blue-500"
        }`}
      >
        장바구니 
      </button>
    </div>
  );
};

export default Item;