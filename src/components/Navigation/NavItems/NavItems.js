import React from 'react';
import './NavItems.css'
import NavItem from '../NavItems/NavItem/NavItem';
const NavItems = (props) => {
    return (
        <div>
            <ul className="NavItems">
                <NavItem link="/" active>Burger Builder</NavItem>
                <NavItem link="/">Check Out</NavItem>
            </ul>
        </div>
    );

}
export default NavItems;