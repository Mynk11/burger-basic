import React, { Component } from 'react';
import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const INDEGREDIENTS_PRICE = {
    salad: 0.5,
    bacon: 1,
    meat: 1.5,
    cheese: 1
}

class BurgerBuilder extends Component {
    //#endregion

    state = {
        ingredients: {
            salad: 0,
            bacon: 2,
            meat: 0,
            cheese: 2
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedIngredientsCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedIngredientsCount;
        const priceAddittion = INDEGREDIENTS_PRICE[type];
        const oldtotalPrice = this.state.totalPrice;
        const newPrice = oldtotalPrice + priceAddittion;
        console.log("totalPrice" + newPrice + "ingredients:" + updatedIngredients);
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

    }

    render() {
        return (
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients}></Burger>
                </div>

                <BuildControls addingredient={this.addIngredientHandler}></BuildControls>
            </Aux>
        )

    }

}

export default BurgerBuilder;