import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
const layout = (props) => {
    return (
        <Aux>
            <div>
                <div>Toolbar , Sidedrawer, Backdrop</div>
                <main className={classes.marginTop}>
                    {classes.marginTop}
                    {props.children}
                </main>
            </div>
        </Aux>
    )
}
export default layout;