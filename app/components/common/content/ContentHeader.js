import React from 'react';

import {Row} from 'react-bootstrap';

export default class ContentHeader extends React.Component {
    static defaultProps = {
        foo: 'bar'
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
                <div className="container-fluid">
                    <h1 className="content-header text-center">
                        {this.props.title}
                    </h1>
                </div>
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