import React from 'react';
import BurgerLogo from '../assets/images/burger.png';
import './Logo.css';
const Logo = (props) => {

    return (<div className="Logo"><img src={BurgerLogo} alt="MyBurger Logo"></img></div>);
}
export default Logo;