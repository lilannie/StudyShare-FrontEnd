import React from 'react';
import SubjectAll from './SubjectAll';

export default class SubjectContent extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <SubjectAll/>
        );
    }

    componentWillMount() {}

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

}