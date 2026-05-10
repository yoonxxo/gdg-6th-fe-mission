import { useState } from "react";
import Item from "../components/Item";
import { priceSelectedData } from "../data/mockData";

const PricePage = () => {
  const [lowPrice, setLowPrice] = useState("");
  const [highPrice, setHighPrice] = useState("");

  const filteredItems = priceSelectedData.items.filter((item) => {
    return (
      (lowPrice === "" || item.price >= Number(lowPrice)) &&
      (highPrice === "" || item.price <= Number(highPrice))
    );
  });

  return (
    <main className="flex flex-col items-center mt-16">
      <div className="flex gap-3 mb-10">
        <input
          type="number"
          placeholder="최소 가격"
          value={lowPrice}
          onChange={(e) => setLowPrice(e.target.value)}
          className="border px-3 py-2 rounded-md"
        />

        <input
          type="number"
          placeholder="최대 가격"
          value={highPrice}
          onChange={(e) => setHighPrice(e.target.value)}
          className="border px-3 py-2 rounded-md"
        />
      </div>

      {filteredItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </main>
  );
};

export default PricePage;