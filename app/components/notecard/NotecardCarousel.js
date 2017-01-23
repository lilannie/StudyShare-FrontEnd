import React from 'react';

import NotecardCreate from './NotecardCreate'
import CarouselItem from './CarouselItem';

export default class NotecardCarousel extends React.Component {
    static defaultProps = {
        activeId: 0
    };

    state = {
        nodecards: {
            0: {
                id: 0,
                front: "First Derivative",
                back: "Change in X",
                prevId: -1,
                nextId: 1
            },
            1: {
                id: 1,
                front: "Second Derivative",
                back: "Change in X^2",
                prevId: 0,
                nextId: 2
            },
            2: {
                id: 2,
                front: "Third Derivative",
                back: "Change in X^3",
                prevId: 1,
                nextId: -1
            }
        },
        activeId: 0
    };

    constructor(props) {
        super(props);

        this.state.activeId = this.props.activeId;
        this.rotateLeft = this.rotateLeft.bind(this);
        this.addLeft = this.addLeft.bind(this);
        this.rotateRight = this.rotateRight.bind(this);
        this.addRight = this.addRight.bind(this);
        this.getCarousel = this.getCarousel.bind(this);
    }

    rotateLeft() {

    }

    addLeft() {

    }

    rotateRight() {

    }

    addRight() {

    }

    getCarousel(activeNotecard) {
        var left;
        var leftButton;
        if (activeNotecard.prevId < 0) {
            left = (
                <div className="notecard-carousel carousel-left" onClick={this.addLeft}>
                    <CarouselItem viewId={0}/>
                </div>
            );
            leftButton = (
                <div className="notecard-carousel carousel-left-arrow" onClick={this.addLeft}>
                    <CarouselItem viewId={4}/>
                </div>
            );
        }
        else {
            left = (
                <div className="notecard-carousel carousel-left" onClick={this.rotateLeft}>
                    <CarouselItem notecard={this.state.notecards[activeNotecard.prevId]} viewId={1}/>
                </div>
            );
            leftButton = (
                <div className="notecard-carousel carousel-left-arrow" onClick={this.rotateLeft}>
                    <CarouselItem viewId={2}/>
                </div>
            );
        }

        var right;
        var rightButton;
        if (activeNotecard.nextId < 0) {
            right = (
                <div className="notecard-carousel carousel-right" onClick={this.addRight}>
                    <CarouselItem viewId={0}/>
                </div>
            );
            rightButton = (
                <div className="notecard-carousel carousel-right-arrow" onClick={this.addRight}>
                    <CarouselItem viewId={5}/>
                </div>
            );
        }
        else {
            right = (
                <div className="notecard-carousel carousel-right" onClick={this.rotateRight}>
                    <CarouselItem notecard={this.state.notecards[activeNotecard.nextId]} viewId={1}/>
                </div>
            );
            rightButton = (
                <div className="notecard-carousel carousel-right-arrow" onClick={this.rotateRight}>
                    <CarouselItem viewId={3}/>
                </div>
            );
        }

        return {
            left: left,
            leftButton: leftButton,
            right: right,
            rightButton: rightButton
        };
    }

    render() {
        var carousel = this.getCarousel();
        return (
            <div className="modal fade" id="addCardModal" tabIndex="-1" role="dialog">
                {carousel.left}
                {carousel.leftButton}
                {carousel.right}
                {carousel.rightButton}
                <NotecardCreate notecard={this.state.notecards[this.state.activeId]}/>
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
