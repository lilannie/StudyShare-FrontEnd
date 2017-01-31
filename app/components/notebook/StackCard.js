import React from 'react';

import '../../scss/notebook.scss';

export default class StackCard extends React.Component {
    static defaultProps = {
        cardId: 1,
        title: 'Calculus'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <section id={'card' + this.props.cardId}
                     className={'card card'+this.props.cardId}>
                <h1>{this.props.title}</h1>
            </section>
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