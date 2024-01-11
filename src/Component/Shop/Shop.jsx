// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className='shop-container'>
             {/* <h2>Products coming here : {products.length}</h2> */}
            <div className='product-container'>
                {
                    products.map(product =>(<Product 
                        key={product.id}
                        product ={product}
                        handleAddToCart ={handleAddToCart}
                    ></Product>))
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>                
            </div>
            
        </div>
    );
};

export default Shop;