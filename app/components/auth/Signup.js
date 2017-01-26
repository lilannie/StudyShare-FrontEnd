import React from 'react';

export default class Signup extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <h1>Signup</h1>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    static shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

};

