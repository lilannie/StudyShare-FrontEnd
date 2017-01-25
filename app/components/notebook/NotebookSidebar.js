import React from 'react';

export default class NotebookSidebar extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div id="notebook-sidebar" className="well col-md-3">
                <ul className="nav nav-pills nav-stacked">
                    <li className="active"><a>All Notebooks</a></li>
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