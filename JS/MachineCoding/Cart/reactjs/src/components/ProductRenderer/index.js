import ProductComponent from '../Products';
import './myStyle.css'

const App = ({ product, handleAdd, handleRemove }) => {
    return (
        <div className="product">
            {product && product.length > 0 && product.map((currProduct, indx) => {
                const { id, productName, mrp } = currProduct;
                return (
                    <ProductComponent
                        id={id}
                        productName={productName}
                        mrp={mrp}
                        addToCart={handleAdd}
                        removeFromCart={handleRemove}

                    />
                )
            })}
        </div>
    )
}

export default App;