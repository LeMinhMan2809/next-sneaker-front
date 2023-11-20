import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
    const ls = typeof window !== 'undefined' ? localStorage : null
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        if (cartProducts?.length > 0) {
            ls?.setItem('cart', JSON.stringify(cartProducts));
        }
    }, [cartProducts])
    useEffect(() => {
        if (ls && ls.getItem('cart')) {
            setCartProducts(JSON.parse(ls.getItem('cart')));
        }
    }, [])
    function addProduct(productID, size) {
        setCartProducts(prev => [...prev, { id: productID, size }]);
    }

    function removeProduct(inventoryId, size) {
        setCartProducts(prev => {
            const pos = prev.findIndex(item => item.id === inventoryId && item.size.name === size.name);
            if (pos !== -1) {
                return prev.filter((value, index) => index !== pos)
            }
            return prev
        })
    }

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct, removeProduct }}>
            {children}
        </CartContext.Provider>
    )
}