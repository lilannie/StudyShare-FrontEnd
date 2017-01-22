import React from 'react';

import NotecardLeft from './NotecardLeft'
import NotecardCreate from './NotecardCreate';

export default class NotecardCarousel extends React.Component {
    static defaultProps = {
        foo: "bar"
    };

    state = {
        foo: "bar"
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal fade" id="addCardModal" tabIndex="-1" role="dialog">
                <NotecardLeft />
                <NotecardCreate />
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
