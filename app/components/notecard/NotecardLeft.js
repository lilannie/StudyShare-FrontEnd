import React from 'react';
import NotecardForm from './NotecardForm';

export default class NotecardLeft extends React.Component {
    static defaultProps = {
        foo: "bar"
    };

    state = {
        foo: "bar"

    };

    constructor(props) {
        super(props);

        this.addCard = this.addCard.bind(this);
    }

    addCard() {
    }

    render() {
        var leftContainer = {
            "position": "absolute",
            "WebkitTransformStyle": "preserve-3d",
            "WebkitBackfaceVisibility": "hidden",
            "WebkitTransform": "rotateY(-45deg)",
            "transformOrigin": "200px 0px 0px",
            "opacity": "0.85",
        };
        var leftContent = {
            "background": "-webkit-linear-gradient(left, #1b6d85, #d5f6f6)",
            "color": "black",
            "border": "0px solid black",
            "height": "375px",
            "width": "350px"
        };
        return (
            <div className="modal-dialog" role="document" style={leftContainer}>
                <div className="modal-content" style={leftContent}>
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
