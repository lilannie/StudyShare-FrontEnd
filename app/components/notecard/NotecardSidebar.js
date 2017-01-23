import React from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

export default class NotecardSidebar extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="notecard-sidebar">
                <Row className="show-grid">
                    <Col xs={6} md={1}>
                        <h3>Title</h3>
                    </Col>
                </Row>
                <Row className="show-grid">

                    <Col xs={6} md={1}>
                        <input type="text" name="title"
                               className="form-control"
                               placeholder="Title"/>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={6} md={1}>
                        <h3>Description</h3>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={6} md={1}>
                <textarea name="description"
                          className="form-control"
                          placeholder="description"/>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={6} md={1}>
                        <button id="save-deck"
                                className="btn">Save</button>
                    </Col>
                </Row>
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