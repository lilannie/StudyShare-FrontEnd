import React from 'react';
import $ from 'jquery';
import NotecardSelector from './NotecardSelector';

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
            <div id={"notecard-front-"+this.props.cardId}
                 onClick={rotateCard.bind(null, this.props.cardId, true)}
                 className="front">
                <NotecardSelector cardId={this.props.cardId}/>

                {this.props.content}
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