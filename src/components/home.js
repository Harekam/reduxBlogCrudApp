import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions';
import { toastr } from 'react-redux-toastr';

class Home extends Component {
    onLogin() {
        this.props.login((err) => {
            if (err) {
                toastr.error('Error', 'Cannot Login!');
                return;
            }
            this.props.history.push('/home');
            toastr.success('Success', 'Successfully Logged In!!');
        });
    }
    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={this.onLogin.bind(this)}>
                    Login
                </button>
            </div>
        );
    }
}

export default connect(null, { login })(Home);