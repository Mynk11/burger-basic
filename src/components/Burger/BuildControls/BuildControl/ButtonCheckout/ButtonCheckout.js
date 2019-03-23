import React from 'react';
import './ButtonCheckout.css';
const ButtonCheckout = (props) => {
    return <button className="OrderButton" onClick={props.Order} disabled={props.purchaseable}>Order Now</button>
}

export default ButtonCheckout;