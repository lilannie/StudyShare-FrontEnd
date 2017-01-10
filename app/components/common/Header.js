import React from 'react';

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
                <NavItem  eventKey={1} href="/" ><img className="navbar-right" src="images/app/logo-dark.png" alt="logo"/></NavItem>
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