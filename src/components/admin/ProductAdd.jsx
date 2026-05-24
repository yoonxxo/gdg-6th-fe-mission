import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import { updateItem } from "../../apis/itemApi";

const ProductAdd = () => {
  const [addName, setAddName] = useState("");
  const [addQuantity, setAddQuantity] = useState("");

  const handleAddStock = () => {
    updateItem(1, {
      name: addName,
      quantity: Number(addQuantity),
    }).then(() => {
      console.log(`${addName} ${addQuantity}개가 추가되었습니다.`);
    });
  };

  return (
    <section className="w-[600px]">
      <h2 className="font-bold mb-4">재고 추가</h2>

      <div className="border border-gray-300 rounded-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <p className="w-20 text-sm">상품명</p>
          <Input
            placeholder="상품명 입력..."
            value={addName}
            onChange={(e) => setAddName(e.target.value)}
            className="border px-3 py-2 rounded-md text-sm "
          />

          <p className="w-12 text-sm">수량</p>
          <Input
            type="number"
            placeholder="0"
            value={addQuantity}
            onChange={(e) => setAddQuantity(e.target.value)}
            className="border px-3 py-2 rounded-md text-sm"
          />
        </div>

        <div className="flex justify-end">
          <Button
            varients="secondary"
            className="w-40"
            onClick={handleAddStock}
          >
            추가
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductAdd;
