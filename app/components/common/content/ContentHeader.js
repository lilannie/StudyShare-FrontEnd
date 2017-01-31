import React from 'react';

import {Row, Col} from 'react-bootstrap';

export default class ContentHeader extends React.Component {
    static defaultProps = {
        title: 'default header',
        contentHeaderStyle: {padding: 0},
        headerStyle: {
            paddingRight: 20
        },
        mdPull: 3,
        md: 4
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
            <Col md={this.props.md} mdPull={this.props.mdPull}
                 style={this.props.contentHeaderStyle}>
                <div className="container-fluid"
                     style={this.props.contentHeaderStyle}>
                    <h1 className="content-header text-right"
                        style={this.props.headerStyle}>
                        {this.props.title}
                    </h1>
                </div>
            </Col>
            </Row>
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