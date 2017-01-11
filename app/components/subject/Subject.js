import React from 'react';

import {Row, Col} from 'react-bootstrap';
import SubjectSidebar from './SubjectSidebar';
import SubjectContent from './SubjectContent';

export default class Subject extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="subject">
                <Row>
                    <div className="container-fluid">
                        <h1 className="subject-header text-center">My Subjects</h1>
                    </div>
                </Row>
                <div className="subject-content-wrapper">
                    <Row>
                        <Col>
                            <SubjectSidebar />
                        </Col>
                        <Col className="subject-content container-fluid well">

                            <SubjectContent />

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