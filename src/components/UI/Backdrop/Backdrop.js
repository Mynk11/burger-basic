import React from 'react';
import './Backdrop.css';

const BackDrop = (props) => {
    console.log("BackDrop", props.show);//purchaseCancel
    return props.show ? <div className="BackDrop" onClick={props.purchaseCancel} onDoubleClick={props.closed}></div > : null

}
export default BackDrop;