import { useEffect, useState } from "react";
import { Products as ProductDump } from './constants/dump';
import CartRenderer from './components/CartRenderer';
import ProductRenderer from './components/ProductRenderer';
import useCartOperations from './hooks/useCartOperations';


const App = () => {
  const [product, setProducts] = useState([...ProductDump]);
  const [cart, setCart] = useState([]);
  const { handleAdd, handleRemove, totalPrice } = useCartOperations({ cart, setCart });

  return (
    <div style={{ display: 'flex' }}>
      <ProductRenderer
        product={product}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
      />
      <CartRenderer
        totalPrice={totalPrice}
        cart={cart}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
      />

    </div>
  )
};

export default App;

// showquantity
// useCallback
// usehooks