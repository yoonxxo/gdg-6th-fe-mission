import {useState, useEffect} from "react"
import Item from "../components/Item"
import { getCategoryItems } from "../apis/itemApi";

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const categories = ["의류", "전자기기", "화장품", "식품"];

  useEffect(() => {
    const fetchCategoryItems = async () => {
      const data = await getCategoryItems();
      setCategoryData(data);
    };
    fetchCategoryItems();
  }, []);

  const filteredItems =
    selectedCategory === ""
      ? categoryData
      : categoryData.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <main className="flex flex-col items-center mt-16">
      
      <select
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          console.log(`${e.target.value} 카테고리 클릭`);
        }}
        className="border border-gray-300 px-4 py-2 rounded-md mb-10"
      >
        <option value="">카테고리 선택</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      

      {filteredItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </main>
  )
}

export default CategoryPage