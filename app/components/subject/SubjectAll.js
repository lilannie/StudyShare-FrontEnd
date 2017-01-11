import React from 'react';
import SubjectItem from './SubjectItem';

export default class SubjectAll extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        var description = 'Calculus is the study of how things change. It provides a framework for modeling systems in which there is change, and a way to deduce the predictions of such models. Calculus is the study of how things change. It provides a framework for modeling systems in which there is change, and a way to deduce the predictions of such models.';
        return (
            <SubjectItem title="Calculus" description={description}/>
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