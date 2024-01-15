/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart = props.cart; // option: 1
    //const {cart} = props; // option: 2
    console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        // eslint-disable-next-line no-const-assign
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + totalShipping + tax;


    return (
        <div className='card'>
            <h2 className='cart-order'>Order Summary</h2>
                <div>
                   <div className='card-total'>
                    <p>Selected Items: {quantity} </p>
                    <p>Total Price: ${totalPrice} </p>
                    <p>Total Shipping Charge: ${totalShipping} </p>
                    <p>Tax: ${tax} </p>
                    <p>Grand Total: ${grandTotal}</p>
                   </div>                   
                </div>
                <div className='btn-div'>
                     <button className='btn-clear'>Clear Cart</button>
                    <button className='btn-order'>Review Order</button>
                </div>
            
        </div>
    );
};

export default Cart;