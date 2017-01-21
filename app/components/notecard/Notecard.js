import React from 'react';

import NotecardFront from './NotecardFront';
import NotecardBack from './NotecardBack';

// import '../../scss/notecard.scss';

export default class Notecard extends React.Component {
    static defaultProps = {
        id: 0
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={"notecard-"+this.props.id} className="notecard">
                <div className="info-card">
                    <NotecardFront />
                    <NotecardBack />
                </div>
            </div>
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
