import React from 'react';
import { Button } from 'react-bootstrap';

export default class Header extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <Button>Header</Button>
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