import React from 'react';

import '../../scss/notecard.scss';

export default class Notecard extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="notecard">

            </div>
    );
    }

    componentWillMount() {
    }

    componentDidMount() {
        $('[rel="tooltip"]').tooltip();
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
