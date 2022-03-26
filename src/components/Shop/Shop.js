import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (product) => {
        const cartItems = [...cart, product]
        setCart(cartItems);
    }

    const chooseOne = (selectedCarts) => {
        const index = Math.floor(Math.random() * 3);
        const luckyCart = selectedCarts[index]
        setCart([luckyCart]);
    }

    const chooseAgain = () => {
        setCart([]);
    }


    return (
        <div className='shop-container'>
            <div>
                <div className='title'>
                    <h1>Mobile Gadget BD</h1>
                </div>

                <div className='product-container'>
                    {
                        products.map(product => <Product key={product._id} product={product} addToCart={addToCart}></Product>)
                    }
                </div>
            </div>
            <div className='cart-container'>
                <Cart carts={cart} chooseAgain={chooseAgain} chooseOne={chooseOne}></Cart>
            </div>

        </div>
    );
};

export default Shop;