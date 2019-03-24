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
    toggleSideDrawer = () => {
        console.log("toggleSideDrawer");
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }
    render() {
        return (
            <Aux>

                {/* <DrawerToggle onClicked={this.toggleSideDrawer} /> */}
                <Toolbar clicked={this.toggleSideDrawer}></Toolbar>

                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}></SideDrawer>

                <main className="marginTop">

                    {this.props.children}
                </main>

            </Aux>
        )
    }
}
export default Layout;