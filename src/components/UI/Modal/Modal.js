import React from 'react';
import './Modal.css';
//import BackDrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxx';
const Modal = (props) => {
    console.log("Modal::" + props.show);
    return (
        <Aux>
            {/* <BackDrop show={props.show}></BackDrop> */}
            <div className="Modal">MODAL
            {props.children}
            </div>
        </Aux>
    )
}
export default Modal;