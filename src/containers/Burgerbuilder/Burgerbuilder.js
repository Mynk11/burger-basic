import React, { Component } from 'react';
import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component {
    //#endregion


    render() {
        return (
            <Aux>
                <div>
                    <Burger></Burger>
                </div>
                <div>
                    Build Controls
            </div>
            </Aux>
        )

    }

}

export default BurgerBuilder;