import React from 'react';
import Aux from '../../hoc/Auxx';
import './Layout.css';
const layout = (props) => {
    return (
        <Aux>
            <div>
                <div>Toolbar , Sidedrawer, Backdrop</div>
                <main className="marginTop">

                    {props.children}
                </main>
            </div>
        </Aux>
    )
}
export default layout;