import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart'>
            <h1>Cart</h1>

            <div>
                <button>Choose 1 for Me</button> <br />
                <button>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;