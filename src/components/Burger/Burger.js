import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
const Burger = (props) => {
    //console.log("BurgerIngredient props", props);
    let transformIngredients = Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_, i) => {
            //console.log("ingredients is", igkey);
            return <BurgerIngredient key={igkey + i} type={igkey} />

        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    //console.log("transformIngredients", transformIngredients);
    if (transformIngredients.length === 0) {
        let message = <p>Please add ingredients</p>
        //console.log("Message is :", message);
        return (
            <div className="Burger">
                <BurgerIngredient type="bread-top"></BurgerIngredient>
                {message}
                <BurgerIngredient type="bread-bottom"></BurgerIngredient>
            </div>
        );
    } else {
        return (

            <div className="Burger">
                {transformIngredients.length}
                <BurgerIngredient type="bread-top"></BurgerIngredient>
                {transformIngredients}
                <BurgerIngredient type="bread-bottom"></BurgerIngredient>
            </div>
        )
    }
}

export default Burger;