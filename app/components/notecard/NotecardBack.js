import React from 'react';
import $ from 'jquery';

import '../../scss/notecard.scss';

export default class NotecardBack extends React.Component {
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
            <div id={"notecard-back-"+this.props.id}
                className="back"
                    onClick={rotateCard.bind(null
                        , this.props.id, false)}>
                <h2>Back</h2>
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
