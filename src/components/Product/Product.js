import React from 'react';
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
                    <h2>{name}</h2>
                    <h4>Price: ${price}</h4>
                </div>
            </div>
            <button>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;