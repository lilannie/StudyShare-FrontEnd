import React from 'react';

import {Row, Col} from 'react-bootstrap';
import NotebookSidebar from './NotebookSidebar';
import NotebookContent from './NotebookContent';

export default class Notebook extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="notebook">
                <Row>
                    <div className="container-fluid">
                        <h1 className="subject-header text-center">My Notebooks</h1>
                    </div>
                </Row>
                <div className="notebook-content-wrapper">
                    <Row>
                        <Col>
                            <NotebookSidebar />
                        </Col>
                        <Col className="notebook-content container-fluid well">

                            <NotebookContent />

                        </Col>
                    </Row>
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