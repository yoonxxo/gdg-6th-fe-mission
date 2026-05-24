import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import { postItem } from "../../apis/itemApi";

const ProductRegister = () => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleRegister = () => {
    postItem({
      name: itemName,
      stock: Number(quantity),
      price: Number(price),
      category: category,
    }).then((newItem) => {
      console.log(
        `${newItem.name} ${newItem.stock} ${newItem.price} ${newItem.category} 가 등록되었습니다.`,
      );
    });
  };

  return (
    <section className="w-[600px]">
      <h2 className="font-bold mb-4">상품 등록</h2>

      <div className="border border-gray-300 rounded-md p-6">
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="flex items-center gap-2">
            <p className="w-14 text-sm">상품명</p>
            <Input
              placeholder="상품명 입력..."
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="border px-3 py-2 rounded-md text-sm flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <p className="w-10 text-sm">수량</p>
            <Input
              type="number"
              placeholder="0"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border px-3 py-2 rounded-md text-sm flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <p className="w-14 text-sm">가격</p>
            <Input
              type="number"
              placeholder="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border px-3 py-2 rounded-md text-sm flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <p className="w-10 text-sm">카테고리</p>
            <Input
              type="text"
              placeholder="카테고리 선택"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border px-3 py-2 rounded-md text-sm flex-1"
            />
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-3">
          * 추가 기능을 카테고리로 설정한 경우에만 카테고리를 이용해주세요.
        </p>

        <div className="flex justify-end">
          <Button
            varients="secondary"
            className="w-40"
            onClick={handleRegister}
          >
            등록
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductRegister;
