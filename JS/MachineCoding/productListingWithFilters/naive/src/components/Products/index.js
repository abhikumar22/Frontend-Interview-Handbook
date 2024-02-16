import "./style.css";
const Product = ({ id, name, price }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Product;
