import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import QuestionAnswers from '../QuestionAnswers/QuestionAnswers';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (product) => {
        // console.log(product);
        const duplicateProduct = cart.find(p => p === product)
        const cartLength = [...cart, product].length;
        console.log(cartLength)
        if (duplicateProduct) {
            alert(`${duplicateProduct.name} already in the cart!\nYou can not add a product twice in the cart!!!`)
        }

        else if (cartLength > 4) {
            alert("You can not able to add more than 4 items in the cart");
        }

        else {
            const cartItems = [...cart, product]
            setCart(cartItems);
        }



    }

    const chooseOne = (selectedCarts) => {
        const totalCartItems = selectedCarts.length;
        if (totalCartItems < 2) {
            alert("Please add minimum 2 items to choose 1 randomly")
        }
        else {
            const index = Math.floor(Math.random() * totalCartItems);
            const luckyCart = selectedCarts[index]
            setCart([luckyCart]);
        }
    }

    const chooseAgain = () => {
        setCart([]);
    }


    return (
        <div>
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
                    <QuestionAnswers></QuestionAnswers>
                </div>

                <div className='cart-container'>
                    <Cart carts={cart} chooseAgain={chooseAgain} chooseOne={chooseOne}></Cart>
                </div>
            </div>


        </div>
    );
};

export default Shop;