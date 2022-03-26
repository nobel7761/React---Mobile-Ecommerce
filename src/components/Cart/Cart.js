import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css';

const Cart = ({ carts, chooseAgain, chooseOne }) => {
    // console.log(props);

    return (
        <div className='cart'>
            <h1>Cart</h1>
            {
                carts.map(cart => {
                    return (
                        <div className='cart-item' key={cart._id}>
                            <img src={cart.picture} alt="" />
                            <p>{cart.name}</p>
                            <FontAwesomeIcon className='trash-icon' icon={faTrash} />
                        </div>
                    )
                })
            }

            <div className='buttons'>
                <button onClick={() => chooseOne(carts)}>Choose 1 for Me</button> <br />
                <button onClick={chooseAgain}>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;