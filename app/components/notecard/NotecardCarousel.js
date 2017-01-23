import React from 'react';

import NotecardCreate from './NotecardCreate'
import CarouselItem from './CarouselItem';

export default class NotecardCarousel extends React.Component {
    static defaultProps = {
        foo: "bar"
    };

    state = {
        nodecards: "bar"
    };

    constructor(props) {
        super(props);

        this.rotateRight = this.rotateRight.bind(this);
        this.rotateLeft = this.rotateLeft.bind(this);
    }

    rotateRight() {

    }

    rotateLeft() {

    }

    render() {
        return (
        <div className="modal fade" id="addCardModal" tabIndex="-1" role="dialog">
            <div className="notecard-carousel carousel-left" onClick={this.rotateRight}>
                <CarouselItem viewId={0}/>
            </div>

            <div className="notecard-carousel carousel-left-arrow" onClick={this.rotateRight}>
                <CarouselItem viewId={4}/>
            </div>

            <div className="notecard-carousel carousel-right-arrow" onClick={this.rotateLeft}>
                <CarouselItem viewId={3}/>
            </div>

            <div className="notecard-carousel carousel-right" onClick={this.rotateLeft}>
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
