import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default class Header extends React.Component {
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
            <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
                <img className="navbar-right" src="img/logo-dark.png" alt="logo"/>
            </Nav>
        );
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }


    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

}