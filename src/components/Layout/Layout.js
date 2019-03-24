import React from 'react';
import Aux from '../../hoc/Auxx';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import './Layout.css';
import SideDrawer from '../SideDrawer/SideDrawer';
class Layout extends React.Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    render() {
        return (
            <Aux>
                <div>
                    <Toolbar></Toolbar>
                    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}></SideDrawer>
                    <div>Toolbar , Sidedrawer, Backdrop</div>
                    <main className="marginTop">

                        {this.props.children}
                    </main>
                </div>
            </Aux>
        )
    }
}
export default Layout;