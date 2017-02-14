import React from 'react';

export default class UserDropDown extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    handleSelect(selectedKey) {

    }

    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a id="user-profile" href="#" className="dropdown-toggle"
                       data-toggle="dropdown">
                        <h4>Username</h4>
                    </a>
                    <ul className="dropdown-menu dropdown-block" role="menu">
                        <li><a href="/user">Profile</a></li>
                        <li><a href="/settings">Settings</a></li>
                        <li><a href="/login">Logout</a></li>
                    </ul>
                </li>
            </ul>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

}