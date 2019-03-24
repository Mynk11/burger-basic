import React from 'react';

import './NavItem.css';
const NavItem = (props) => {
    return (
        <div>
            <ul className="NavItem">
                <li><a href={props.link} className={props.active ? props.active : null}>{props.children}</a></li>
            </ul>
        </div>
    );

}
export default NavItem;