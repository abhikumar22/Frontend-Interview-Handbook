import { useEffect, useState } from "react";
import Product from "./components/Products";
import Categories from "./components/Categories";
import "./styles.css";

const categories_dump = {
  men: "Men",
  women: "Women",
  kids: "Kids",
};
const product_dump = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    type: "men",
  },
  {
    id: 42,
    name: "Product 2",
    price: 500,
    type: "men",
  },
  {
    id: 22,
    name: "Product 3",
    price: 100,
    type: "men",
  },
  {
    id: 2,
    name: "Product 6",
    price: 500,
    type: "kids",
  },
  {
    id: 5,
    name: "Product 11",
    price: 21,
    type: "women",
  },
  {
    id: 89,
    name: "Product 644",
    price: 33,
    type: "women",
  },
];

const App = () => {
  const [products, setProducts] = useState(product_dump);
  const [categories, setCategories] = useState(categories_dump);
  const [selectedCategory, setSelectedCategoryIds] = useState([]);
  const handleCategoryClick = (name) => {
    const catIndx = selectedCategory.indexOf(name.toLowerCase());
    if (!!(catIndx > -1)) {
      setSelectedCategoryIds(
        selectedCategory.filter(
          (v, i) => v.toLowerCase() !== name.toLowerCase()
        )
      );
      return;
    }
    setSelectedCategoryIds([...selectedCategory, name.toLowerCase()]);
  };
  useEffect(() => {
    if (selectedCategory && selectedCategory.length > 0) {
      let temp = [];
      product_dump.forEach((product) => {
        if (selectedCategory.includes(product.type.toLowerCase())) {
          temp.push({
            ...product,
          });
        }
      });
      setProducts(temp);
    } else {
      setProducts(product_dump);
    }
  }, [selectedCategory]);
  return (
    <div className="App">
      <div className="categoryWrapper">
        {Object.keys(categories).map((name, idx) => {
          const isSelected = selectedCategory.includes(
            categories[name].toLowerCase()
          );
          console.log("**** currrent category", categories[name], isSelected);
          return (
            <Categories
              key={name}
              handleCategoryClick={handleCategoryClick}
              name={categories[name]}
              isSelected={selectedCategory.includes(
                categories[name].toLowerCase()
              )}
            />
          );
        })}
      </div>
      {products.map(({ id, name, price }, indx) => (
        <Product key={id} id={id} name={name} price={price} />
      ))}
    </div>
  );
};

export default App;
