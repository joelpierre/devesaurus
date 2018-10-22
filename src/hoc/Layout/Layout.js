// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Aux from '../Aux/Aux';
// import classes from './Layout.css';
// import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
//
// class Layout extends Component {
//   state = {
//     showSideDrawer: false,
//   };
//
//   sideDrawerCloseHandler = () => {
//     this.setState({ showSideDrawer: false });
//   };
//
//   sideDrawToggleHandler = () => {
//     this.setState(prevState => ({
//       showSideDrawer: !prevState.showSideDrawer,
//     }));
//   };
//
//   render () {
//     return (
//       <Aux>
//         <Toolbar
//           isAuth={this.props.isAuth}
//           drawToggleClicked={this.sideDrawToggleHandler}
//         />
//         <SideDrawer
//           isAuth={this.props.isAuth}
//           open={this.state.showSideDrawer}
//           closed={this.sideDrawerCloseHandler}
//         />
//
//         <main className={classes.Content}>
//           {this.props.children}
//         </main>
//       </Aux>
//     );
//   }
// }
//
// const mapStateToProps = state => ({
//   isAuth: state.auth.token !== null,
// });
//
// export default connect(mapStateToProps)(Layout);