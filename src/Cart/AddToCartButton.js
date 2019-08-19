// AddToCartButton.jsx
import React from 'react';
import { MyContext } from './Provider';
const AddToCartButton = () => {
    return (
        <MyContext.Consumer>
            {context => {
                const { onAddToCartClick } = context;
                return (
                    <button onClick={onAddToCartClick}>
                        Add to Cart
          </button>
                );
            }}
        </MyContext.Consumer>
    );
};
export default AddToCartButton;