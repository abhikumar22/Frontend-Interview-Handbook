import "./style.css";
const Categories = ({ name, isSelected, handleCategoryClick }) => {
  return (
    <div
      onClick={() => handleCategoryClick(name)}
      className={`category ${isSelected ? "isSelected" : ""}`}
    >
      <button>{name}</button>
    </div>
  );
};

export default Categories;
