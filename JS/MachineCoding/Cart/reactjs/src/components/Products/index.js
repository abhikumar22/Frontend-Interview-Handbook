import './myStyle.css';
const Product = ({ productName, mrp, id, addToCart = () => { }, removeFromCart = () => { }, quantity }) => {
    return (
        <div className="Product_Wrapper">
            <div className='content'>
                <div>{productName}</div>
                <div>{mrp}</div>
                {quantity && quantity > 0 && <div>quantity: {quantity}</div>}
            </div>
            <div className='buttons'>
                <div>
                    <button onClick={() => {
                        addToCart({ id, mrp, productName })
                    }}>Add</button>
                    <button
                        onClick={() => {
                            removeFromCart({ id, mrp, productName })
                        }}
                    >Remove
                    </button>

                </div>
            </div>

        </div>
    )
};
export default Product;