import React from 'react';

import SubjectItemHeader from './SubjectItemHeader';
import SubjectItemContent from './SubjectItemContent';
import SubjectEdit from './SubjectEdit';
import SubjectDelete from './SubjectDelete';

export default class SubjectItem extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);
    }

    handleClick() {}


    render() {
        return (
            <nav className="nav-tabs">
                <ul className="nav nav-pills pull-left">
                    <li><a className="card-action-grey" onClick={this.handleClick()}>Edit</a></li>
                    <li><a className="card-action-grey" onClick={this.handleClick()}>Delete</a></li>
                    <li><a className="card-action-grey" >Share</a></li>
                </ul>
            </nav>
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