/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
//     console.log(props);
    const {img, name, seller, quantity, price, ratings, shipping} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
          <div className='product'>
             <img src={img} alt="" />
             <div className='product-info'>
             <h6 className='product-name'>{name}</h6>
             <p>Price: ${price}</p>
             <p>Shipping: {shipping}</p>
             <p>Manufacture: {seller}</p>
             <p>Quantity: {quantity}</p>
             <p>Rating: {ratings} stars</p>             
             </div>               
              <button onClick={()=> handleAddToCart(props.product)} className='btn-cart'>
                  Add to Cart
                  <FontAwesomeIcon className='font-icon' icon={faShoppingCart} />
             </button>                     
          </div>
    );
};

export default Product;