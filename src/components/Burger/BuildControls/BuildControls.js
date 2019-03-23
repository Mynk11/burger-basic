import React from 'react';
import BuildControl from './BuildControl/BuildControl';
//import BurgerPrice from './BuildControl/BurgerPrice';
import './BuildControl.css';
const controls = [{ label: 'Cheese', type: 'cheese' }, { label: 'Bacon', type: 'bacon' }, { label: 'Meat', type: 'meat' }, { label: 'Salad', type: 'salad' }];

const BuildControls = (props) => controls.map((ctrl) => {
    return (
        <React.Fragment>

            <BuildControl key={Math.random()} disabledInfo={props.disableInfo[ctrl.type]} added={() => props.addingredient(ctrl.type)} remove={() => props.removeIngredient(ctrl.type)} label={ctrl.label}></BuildControl>
        </React.Fragment>
    );

});




export default BuildControls;
