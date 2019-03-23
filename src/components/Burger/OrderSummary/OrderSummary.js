import React from 'react';
import Auxx from '../../../hoc/Auxx';
const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((key) => {
        return <li key={key}><span style={{ textTransform: "capitalize" }}>{key}:</span>{props.ingredients[key]}</li>
    });

    return (<Auxx>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue to checkout?</p>
    </Auxx>
    );
}

export default OrderSummary;