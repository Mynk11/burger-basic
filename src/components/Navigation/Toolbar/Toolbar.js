import React from 'react';
import './Toolbar.css'
import Logo from '../../../Logo/Logo';
import NavigationItems from '../../Navigation/NavItems/NavItems';
//import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle';
const Toolbar = (props) => {
    return (<header className="Toolbar">
        <div onClick={props.clicked}>MENU</div>

        <div className="Logo">
            <Logo></Logo>
        </div>
        <nav className="DisplayOnly">
            <NavigationItems></NavigationItems>
        </nav>
    </header>
    )
}

export default Toolbar;