import { useState } from "react";

const AdminPage = () => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [addName, setAddName] = useState("");
  const [addQuantity, setAddQuantity] = useState("");

  const [deleteName, setDeleteName] = useState("");

  const handleRegister = () => {
    console.log(`${itemName} ${quantity} ${price} ${category} 가 등록되었습니다.`);
  };

  const handleAddStock = () => {
    console.log(`${addName} ${addQuantity}개가 추가되었습니다.`);
  };

  const handleDelete = () => {
    console.log(`${deleteName}가 삭제되었습니다.`);
  };

  return (
    <main className="flex flex-col items-center mt-16 gap-12">
      <section>
        <h2 className="font-bold mb-4">상품 등록</h2>

        <div className="border rounded-md p-6 flex flex-col gap-3 w-[600px]">
          <input
            type="text"
            placeholder="상품명 입력..."
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="border px-3 py-2 rounded-md"
          />

          <input
            type="number"
            placeholder="수량 입력..."
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border px-3 py-2 rounded-md"
          />

          <input
            type="number"
            placeholder="가격 입력..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border px-3 py-2 rounded-md"
          />

          <input
            type="text"
            placeholder="카테고리 입력..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-3 py-2 rounded-md"
          />

          <button
            onClick={handleRegister}
            className="bg-blue-500 text-white py-2 rounded-md"
          >
            등록
          </button>
        </div>
      </section>

      <section>
        <h2 className="font-bold mb-4">재고 추가</h2>

        <div className="border rounded-md p-6 flex gap-3 w-[600px]">
          <input
            type="text"
            placeholder="상품명 입력..."
            value={addName}
            onChange={(e) => setAddName(e.target.value)}
            className="border px-3 py-2 rounded-md flex-1"
          />

          <input
            type="number"
            placeholder="수량 입력..."
            value={addQuantity}
            onChange={(e) => setAddQuantity(e.target.value)}
            className="border px-3 py-2 rounded-md flex-1"
          />

          <button
            onClick={handleAddStock}
            className="bg-blue-500 text-white px-6 rounded-md"
          >
            추가
          </button>
        </div>
      </section>

      <section>
        <h2 className="font-bold mb-4">상품 삭제</h2>

        <div className="border rounded-md p-6 flex gap-3 w-[600px]">
          <input
            type="text"
            placeholder="상품명 입력..."
            value={deleteName}
            onChange={(e) => setDeleteName(e.target.value)}
            className="border px-3 py-2 rounded-md flex-1"
          />

          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-6 rounded-md"
          >
            삭제
          </button>
        </div>
      </section>
    </main>
  );
};

export default AdminPage;