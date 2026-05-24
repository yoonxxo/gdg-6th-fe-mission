import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import { deleteItem } from "../../apis/itemApi";  

const ProductDelete = () => {
    const [deleteName, setDeleteName] = useState("");

    const handleDelete = () => {
        deleteItem(1).then(() => {
        console.log(`${deleteName}가 삭제되었습니다.`);
        });
    };

    return (
      <section className="w-[600px]">
        <h2 className="font-bold mb-4">상품 삭제</h2>

        <div className="border border-gray-300 rounded-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <p className="w-20 text-sm">상품명</p>

            <Input
              placeholder="상품명 입력..."
              value={deleteName}
              onChange={(e) => setDeleteName(e.target.value)}
              className="border px-3 py-2 rounded-md text-sm"
            />
          </div>

          <div className="flex justify-end">
            <Button
              varients="tertiary"
              className="w-40"
              onClick={handleDelete}
            >
              삭제
            </Button>
          </div>
        </div>
      </section>
  );

}

export default ProductDelete