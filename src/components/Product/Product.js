import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { _id, name, price, picture } = props.product;
    // console.log(_id, name, price, picture)
    return (
        <div className='product'>
            <div className='product-details'>
                <div className='product-img'>
                    <img src={picture} alt="" />
                </div>
                <div className='product-info'>
                    <h3>{name}</h3>
                    <h4>Price: ${price}</h4>
                </div>
            </div>
            <button>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;