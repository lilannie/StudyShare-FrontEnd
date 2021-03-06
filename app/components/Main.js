import React from 'react';
import {Row, Col} from 'react-bootstrap';

import Header from 'Header';
import Sidebar from 'Sidebar';
import NotebookCreate from './notebook/NotebookCreate';
import '../scss/app.scss';

export default class Main extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <Row>
                <Sidebar/>
                <Col id="main-content-wrapper"

                     role="main">
                    {this.props.children}
                </Col>
                </Row>
                <NotebookCreate />
            </div>
        );
    }

    componentWillMount() {}

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

}