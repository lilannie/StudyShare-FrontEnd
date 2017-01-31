import React from 'react';

import '../../scss/notebook.scss';

export default class NotebookItem extends React.Component {
    static defaultProps = {
        title: 'Civil War',
        description: 'List of all major events and dates.'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="panel panel-default text-center">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>
                <div className="panel-body">
                    {this.props.description}
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