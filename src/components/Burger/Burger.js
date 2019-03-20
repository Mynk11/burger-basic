import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
const Burger = (props) => {
    const transformIngredients = Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((ko, i) => {
            console.log("ingredients is", ko, igkey);
            return <BurgerIngredient key={igkey + i} type={igkey} />
        });;
    });
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            <BurgerIngredient type="bacon"></BurgerIngredient>
            <BurgerIngredient type="cheese"></BurgerIngredient>
            <BurgerIngredient type="meat"></BurgerIngredient>
            <BurgerIngredient type="salad"></BurgerIngredient>
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default Burger;