import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as toastrActions } from 'react-redux-toastr';
// In your React component
class Toast extends Component {
    render() {
        return (
            <div>
                {this.props.toastrActions.add({ type: 'error', message: 'message', title: 'your title' })}
            </div>
        );
    }
}

function mapStateToProps({ error }) {
    return { errorDetails: error };
}
export default connect(mapStateToProps, { toastrActions })(Toast);