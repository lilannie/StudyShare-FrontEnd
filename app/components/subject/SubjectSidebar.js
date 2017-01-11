import React from 'react';

export default class SubjectSidebar extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div id="subject-sidebar" className="well col-md-3">
                <ul className="nav nav-pills nav-stacked">
                    <li className="active"><a>All Subjects</a></li>
                    <li><a>Create</a></li>
                </ul>
            </div>
        );
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

}