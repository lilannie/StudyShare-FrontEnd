import React from 'react';

export default class NotebookItemContent extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={{
                "minWidth": "75px",
            }}
                 className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">Content</h4>
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