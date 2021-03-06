import React, { Component } from 'react';
import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BurgerPrice from '../../components/Burger/BuildControls/BuildControl/BurgerPrice';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import ButtonCheckOut from '../../components/Burger/BuildControls/BuildControl/ButtonCheckout/ButtonCheckout';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import BackDrop from '../../components/UI/Backdrop/Backdrop';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
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
        purchasing: false,
        loading: false
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

        console.log("Not purchasable", this.state.purchaseable);

        this.setState((prevState) => {
            console.log("prevState", prevState);
            if (prevState.totalPrice !== 4) {
                return { purchaseable: true };
            } else {
                return { purchaseable: false };
            }
        });


    }

    Purchasehandler = () => {
        console.log("purchase handler is called");

        this.setState((prevState) => {
            console.log("prevState", prevState);
            if (this.state.totalPrice !== 4) {
                return { purchasing: true };
            } else {
                return { purchasing: false };
            }
        });
    }

    PurchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    PurchaseContinueHnadler = () => {
        this.setState({ loading: true });
        const postData = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Aniket",
                address: "shakarpur Delhi",
                country: "india",
                mobileNo: '909878767854'
            },
            deliveryMethod: "fastest",
            paymentMode: 'online',
            email: 'May@me.com'
        }
        axios.post('/orders.json', postData).then(response => {
            this.setState((prevState) => {
                return { loading: false }
            });
            console.log("Response from server is:", response);
        }, (err) => {
            this.setState((prevState) => {
                return { loading: false }
            });
            console.log("Error from server is:", err);
        });

    }

    render() {

        const disableControl = {
            ...this.state.ingredients
        }
        for (let key in disableControl) {
            disableControl[key] = disableControl[key] <= 0;
        }
        let orderSum = <OrderSummary cancel={this.PurchaseCancelHandler}
            submit={this.PurchaseContinueHnadler}
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}></OrderSummary>
        if (this.state.loading) {
            orderSum = <Spinner />
        }

        return (
            <Aux>
                <ErrorHandler clicked={this.state.PurchaseCancelHandler} />
                <div>
                    <Burger ingredients={this.state.ingredients}></Burger>
                </div>
                <BurgerPrice price={this.state.totalPrice}></BurgerPrice>
                <BuildControls disableInfo={disableControl}
                    price={this.state.totalPrice} addingredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler}></BuildControls>
                <ButtonCheckOut Order={this.Purchasehandler} purchaseable={this.state.purchaseable}></ButtonCheckOut>
                <BackDrop show={this.state.purchasing} purchaseCancel={this.PurchaseCancelHandler}></BackDrop>
                {this.state.purchasing ?
                    (<Modal show={this.state.purchasing}>


                        {/* <OrderSummary cancel={this.PurchaseCancelHandler}
                            submit={this.PurchaseContinueHnadler}
                            ingredients={this.state.ingredients}
                            price={this.state.totalPrice}></OrderSummary> */}
                        {orderSum}


                    </Modal>) : <p></p>

                }
            </Aux >
        )

    }

}

export default BurgerBuilder;