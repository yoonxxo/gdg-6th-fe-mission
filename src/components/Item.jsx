import { useState } from "react";
import Input from "./common/Input";
import { useOutletContext } from "react-router-dom";

const Item = ({ item }) => {
  
  const [count, setCount] = useState("");
  const [added, setIsAdded] = useState(false);

  const { addToCart } = useOutletContext();

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleAddCart = () => {
    const cartItem = {
      productId: item.id,
      name: item.name,
      price: item.price,
      quantity: item.stock,
    };

    addToCart(cartItem);

    console.log(`${item.name} ${count}개가 장바구니에 추가되었습니다.`);
    setIsAdded(true);
  };

  return (
    <div className="flex items-center justify-between w-[600px] border border-gray-300 rounded-md px-6 py-4 mb-4">
      <div>
        <h3 className="font-bold">{item.name}</h3>
        <p className="text-sm text-gray-500">
          {item.price}원 남은 수량: {item.stock}개
        </p>
      </div>

      <Input
        type="number"
        placeholder="개수 입력..."
        value={count}
        onChange={handleChange}
      />

      <button
        onClick={handleAddCart}
        disabled={added}
        className={`px-5 py-2 rounded-md text-white cursor-pointer ${
          added ? "bg-gray-400" : "bg-blue-500"
        }`}
      >
        장바구니
      </button>
    </div>
  );
};

export default Item;