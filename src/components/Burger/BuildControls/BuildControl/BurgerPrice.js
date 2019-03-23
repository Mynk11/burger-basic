import React from 'react';
const BurgerPrice = (props) => <p style={{ textAlign: "center" }}> Current price: <b>{props.price.toFixed(2)}</b></p>
export default BurgerPrice;