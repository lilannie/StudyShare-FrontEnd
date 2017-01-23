import React from 'react';

import NotecardCreate from './NotecardCreate'
import CarouselItem from './CarouselItem';

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
            <div className="notecard-carousel carousel-left">
                <CarouselItem viewId={0}/>
            </div>

            <div className="notecard-carousel carousel-left-arrow">
                <CarouselItem viewId={2}/>
            </div>

            <div className="notecard-carousel carousel-right-arrow">
                <CarouselItem viewId={2}/>
            </div>

            <div className="notecard-carousel carousel-right">
                <CarouselItem viewId={1}/>
            </div>

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
