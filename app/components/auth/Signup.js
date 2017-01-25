import React from 'react';

import '../../scss/Signup.scss';

export default class Signup extends React. Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (<div className="container">
            <div className="row">

                <div className="main">

                    <h3>Please Log In, or <a href="#">Sign Up</a></h3>
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <a href="#" className="btn btn-lg btn-primary btn-block">Facebook</a>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <a href="#" className="btn btn-lg btn-info btn-block">Google</a>
                        </div>
                    </div>
                    <div className="login-or">
                        <hr className="hr-or"/>
                        <span className="span-or">or</span>
                    </div>

                    <form role="form"/>
                        <div className="form-group">
                            <label htmlFor="inputUsernameEmail">Username or email</label>
                            <input type="text" className="form-control" id="inputUsernameEmail"/>
                </div>
                <div className="form-group">
                    <a className="pull-right" href="#">Forgot password?</a>
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword"/>
            </div>
            <div className="checkbox pull-right">
                <label>
                    <input type="checkbox"/>
                </label>
                Remember me
            </div>
            <button type="submit" className="btn btn btn-primary">
                Log In
            </button>


    </div>

    </div>
    </div>);
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    static shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

};

