import React from 'react';

import {Grid, Row, Col} from 'react-bootstrap';
import Header from 'Header';
import Footer from 'Footer';
import Sidebar from 'Sidebar';

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
                <Sidebar/>
                <div id="body" className="container-fluid">
                    {this.props.children}
                </div>
                <Footer/>
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

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

}