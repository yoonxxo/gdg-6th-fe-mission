import { useState } from "react";
import Item from "../components/Item";
import { sortedData } from "../data/mockData";

const SortPage = () => {
  const [sortType, setSortType] = useState("");

  const sortedItems = [...sortedData].sort((a, b) => {
    if (sortType === "name") {
      return a.itemName.localeCompare(b.itemName);
    }

    if (sortType === "price") {
      return a.price - b.price;
    }

    return 0;
  });

  return (
    <main className="flex flex-col items-center mt-16">
      <select
        value={sortType}
        onChange={(e) => {
          setSortType(e.target.value);
          console.log(`${e.target.value} 정렬 클릭`);
        }}
        className="border border-gray-300 px-4 py-2 rounded-md mb-10"
      >
        <option value="name">이름순 정렬</option>
        <option value="price">가격순 정렬</option>
      </select>

      {sortedItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </main>
  );
};

export default SortPage;