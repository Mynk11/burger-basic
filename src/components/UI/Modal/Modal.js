import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <div className="Modal">MODAL
            {props.children}
        </div>
    )
}
export default Modal;