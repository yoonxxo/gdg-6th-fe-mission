import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Item from "../components/Item";

import { getItems } from "../apis/itemApi";
import { useEffect, useState } from "react";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <main className="grow w-full flex flex-col">
      <div className="flex gap-3 mb-5">
        <Input placeholder="상품 검색..." className="flex-1 px-3 py-2" />

        <Button varients="secondary" className="w-30">
          검색
        </Button>
      </div>

      {items.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center">
          <img src="/gdg-logo.svg" alt="GDG Logo" className="w-50 opacity-30" />

          <p className="text-gray-400 text-sm">검색 결과가 없습니다.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;
