import React from 'react';

const DrawerToggle = (props) => {
    console.log("DrawerToggle", props);
    return <div onClick={props.clicked}>Menu</div>
}
export default DrawerToggle;