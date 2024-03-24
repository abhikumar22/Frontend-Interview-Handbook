import { useEffect, useState } from "react";
import ProductComponent from '../Products';
import './myStyle.css'
const App = ({
    product,
    totalPrice,
    cart,
    handleAdd = () => { },
    handleRemove = () => { },
}) => {
    return (
        <div className="cart">
            <div>
                Total Price : {totalPrice}
            </div>
            {cart && cart.length > 0 && cart.map((currCart, indx) => {
                const { id, productName, mrp, quantity } = currCart;
                return (
                    <ProductComponent
                        id={id}
                        productName={productName}
                        mrp={mrp}
                        quantity={quantity}
                        addToCart={handleAdd}
                        removeFromCart={handleRemove}
                    />
                )
            })}
        </div>
    )
};

export default App;
