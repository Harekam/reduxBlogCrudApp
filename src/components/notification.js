// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { showMessage } from '../actions';

// class NotificationContainer extends Component {

//     componentDidMount() {
//         this.notificationSystem = this.refs.notificationSystem;
//     }

//     componentWillReceiveProps(newProps) {
//         const { message, level } = newProps.notification;
//         this.notificationSystem.addNotification({
//             message,
//             level
//         });
//     }

//     render() {
//         return (
//             <NotificationSystem ref="notificationSystem" />
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//         notification: state.error
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators({
//             showMessage
//         }, dispatch)
//     };
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(NotificationContainer);