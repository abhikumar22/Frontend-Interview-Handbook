import { useCallback, useMemo } from 'react';

const App = ({ cart, setCart }) => {

    const handleAdd = ({ id, productName, mrp }) => {
        let temp = [...cart];
        const isPresent = temp.findIndex((x) => x.id === id);
        if (isPresent > -1) {
            temp[isPresent].quantity = temp[isPresent].quantity + 1
        } else {
            temp.push({ id, productName, mrp, quantity: 1 });
        }
        setCart([...temp]);
    };

    const handleRemove = ({ id, productName, mrp }) => {

        let temp = [...cart];
        const isPresent = temp.findIndex((x) => x.id === id);

        if (isPresent > -1) {
            let currPro = temp[isPresent];
            if (currPro.quantity === 1) {
                temp = [...temp.filter((x) => x.id != id)]
            } else {
                temp[isPresent].quantity = temp[isPresent].quantity - 1
            }
            setCart([...temp]);
        }
    }

    const calculatePrice = () => {
        let price = (cart && cart.length > 0) ? cart.reduce(((acc, inc) => acc + inc.mrp * inc.quantity), 0) : 0;
        return price;
    }
    // const cartValue = calculatePrice();

    const totalPrice = useMemo(calculatePrice(), [cart]);


    return { handleAdd, handleRemove, totalPrice };
}
export default App;