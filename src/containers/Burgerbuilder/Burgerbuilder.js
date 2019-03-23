import React, { Component } from 'react';
import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BurgerPrice from '../../components/Burger/BuildControls/BuildControl/BurgerPrice';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import ButtonCheckOut from '../../components/Burger/BuildControls/BuildControl/ButtonCheckout/ButtonCheckout';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INDEGREDIENTS_PRICE = {
    salad: 0.5,
    bacon: 2,
    meat: 1.5,
    cheese: 0.8
}

class BurgerBuilder extends Component {
    //#endregion

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
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
        // console.log("totalPrice" + newPrice + "ingredients:" + updatedIngredients);
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.UpdatePurchaseable(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedIngredients = {
            ...this.state.ingredients
        }
        if (oldCount <= 0) {
            return;
        }
        else {
            const updatedIngredientsCount = oldCount - 1;

            updatedIngredients[type] = updatedIngredientsCount;
            const priceAddittion = INDEGREDIENTS_PRICE[type];
            const oldtotalPrice = this.state.totalPrice;
            const newPrice = oldtotalPrice - priceAddittion;
            //console.log("totalPrice" + newPrice + "ingredients:" + updatedIngredients);
            this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

        }
        this.UpdatePurchaseable(updatedIngredients);
    }

    UpdatePurchaseable = (updatedIngredients) => {

        if (this.state.totalPrice > 4) {
            this.setState((prevState) =>
                ({ purchaseable: !prevState.purchaseable })
            )

        } else {
            this.setState((prevState) =>
                ({ purchaseable: false })
            )

        }
        console.log("this.state.totalPrice", this.state.purchaseable);

    }

    Purchasehandler = () => {

        this.setState({ purchasing: true });

    }

    render() {

        const disableControl = {
            ...this.state.ingredients
        }
        for (let key in disableControl) {
            disableControl[key] = disableControl[key] <= 0;
        }

        return (
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients}></Burger>
                </div>
                <BurgerPrice price={this.state.totalPrice}></BurgerPrice>
                <BuildControls disableInfo={disableControl}
                    price={this.state.totalPrice} addingredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler}></BuildControls>
                <ButtonCheckOut Order={this.Purchasehandler} purchaseable={this.state.purchaseable}></ButtonCheckOut>
                {this.state.purchasing ?
                    (<Modal show={this.state.purchasing}>


                        <OrderSummary ingredients={this.state.ingredients}></OrderSummary>


                    </Modal>) : <p>Not purchaseable</p>

                }
            </Aux >
        )

    }

}

export default BurgerBuilder;