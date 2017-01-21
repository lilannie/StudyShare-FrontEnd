import React from 'react';
import $ from 'jquery';

import '../../scss/notecard.scss';

export default class NotecardFront extends React.Component {
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
            <div id={"notecard-front-"+this.props.id}
                 onClick={rotateCard.bind(null, this.props.id, true)}
                 className="front">
                <h1>Annie Steenson</h1>
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