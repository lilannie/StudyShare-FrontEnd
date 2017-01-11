import React from 'react';

import SubjectItemHeader from './SubjectItemHeader';

export default class SubjectItem extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (

            <div className="container-fluid">
                <div className="card">
                    <div className="card-content">
                            <SubjectItemHeader title="Calculus
"/>
                            <div className="card-body">
                                <p className="card-p">
                                    There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration in some form, by injected humour,
                                    or randomised words which don't look even slightly believable. If you are going to
                                    use a passage of Lorem Ipsum, you need to be sure there
                                    isn't anything embarrassing hidden in the middle of text.

                                </p>
                            </div>
                            <nav className="nav-tabs">
                                <ul className="nav nav-pills pull-left">
                                    <li ><a className="card-action-grey">Edit</a></li>
                                    <li><a className="card-action-grey">Delete</a></li>
                                    <li><a className="card-action-grey" href="#">Share</a></li>
                                </ul>
                            </nav>

                    </div>
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