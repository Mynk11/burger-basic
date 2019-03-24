import React from 'react';
import Auxx from '../../../hoc/Auxx';
import Button from '../Button/Button';
import BurgerPrice from '../BuildControls/BuildControl/BurgerPrice';
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
        <BurgerPrice price={props.price}></BurgerPrice>
        <p>Continue to checkout?</p>
        <Button btnType="Success" clicked={props.submit}>Submit</Button>
        <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
    </Auxx>
    );
}

export default OrderSummary;