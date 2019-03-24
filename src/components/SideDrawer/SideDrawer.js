import React from 'react';
import NavigationItems from '../Navigation/NavItems/NavItems';
import Logo from '../../Logo/Logo';
import './SideDrawer.css';
import BackDrop from '../UI/Backdrop/Backdrop';
const SideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "close"];
    if (props.open) {
        attachedClasses[1] = "open";
    }
    return (
        <React.Fragment>
            <BackDrop show={props.open} closed={props.closed}></BackDrop>
            <div className={attachedClasses.join(' ')}>
                <Logo></Logo>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </React.Fragment>
    );
}

export default SideDrawer;