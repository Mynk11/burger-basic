
import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControl.css';
const controls = [{ label: 'Cheese', type: 'cheese' }, { label: 'Bacon', type: 'bacon' }, { label: 'Meat', type: 'meat' }, { label: 'Salad', type: 'salad' }];


const BuildControls = (props) =>
    controls.map((ctrl) => {
        // console.log("ctrl is:", ctrl.label, ctrl.type);
        return (<BuildControl added={() => props.addingredient(ctrl.type)} key={ctrl.type} label={ctrl.label}></BuildControl>);
    });


export default BuildControls;
