import React from 'react';
import './Backdrop.css';

const BackDrop = (props) => {
    console.log("BackDrop", props.show);
    return props.show ? <div className="BackDrop" onClick={props.purchaseCancel}></div> : null

}
export default BackDrop;