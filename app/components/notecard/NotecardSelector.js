import React from 'react';
import $ from 'jquery';

import '../../scss/notecard.scss';

export default class NotecardSelector extends React.Component {
    static defaultProps = {
        id: 0
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);

        this.selectItem = this.selectItem.bind(this);
    }

    selectItem(cardId) {

    }


    render() {
        return (
            <input className="notecard-selector"
                name={"selected-"+this.props.cardId}
                   type="checkbox"
                   onSelect={this.selectItem.bind(null, this.props.cardId)}/>
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