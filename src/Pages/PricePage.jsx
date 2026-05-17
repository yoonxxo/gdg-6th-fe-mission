import { useState, useEffect } from "react";
import Item from "../components/Item";
import { getPriceSelectedItems } from "../apis/itemApi";
import Input from "../components/common/Input";

const PricePage = () => {
  const [lowPrice, setLowPrice] = useState("");
  const [highPrice, setHighPrice] = useState("");
  const [priceSelectedItems, setPriceSelectedItems] = useState({ items: [] });

  useEffect(() => {
    const fetchPriceSelectedItems = async () => {
      const data = await getPriceSelectedItems();
      setPriceSelectedItems(data);
    };

    fetchPriceSelectedItems();
  }, []);

  const filteredItems = priceSelectedItems.items.filter((item) => {
    return (
      (lowPrice === "" || item.price >= Number(lowPrice)) &&
      (highPrice === "" || item.price <= Number(highPrice))
    );
  });

  return (
    <main className="flex flex-col items-center mt-16">
      <div className="flex gap-3 mb-10">
        <Input
          type="number"
          placeholder="최소 가격"
          value={lowPrice}
          onChange={(e) => setLowPrice(e.target.value)}
        />

        <Input
          type="number"
          placeholder="최대 가격"
          value={highPrice}
          onChange={(e) => setHighPrice(e.target.value)}
        />
      </div>

      {filteredItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </main>
  );
};

export default PricePage;