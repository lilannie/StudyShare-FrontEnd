import React from 'react';

export default class SubjectItemContent extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">Description</h4>
                </div>
                <div className="panel-body">
                    {this.props.description}
                </div>

                <div className="panel-heading">
                    <h4 className="panel-title">Content</h4>
                </div>

                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Date Created</th>
                        <th>Last Modified</th>
                    </tr>
                    <tr>
                        <td>Fake</td>
                        <td>Fake</td>
                        <td>Fake</td>
                        <td>Fake</td>
                        <td>Fake</td>

                    </tr>
                    </tbody>
                </table>
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