import React from 'react';

export default class SubjectEdit extends React.Component {
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
                "minWidth": "1325px",
            }}
                 className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">Edit</h4>
                </div>

                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th>Title</th>
                        <td>
                            <input className="form-control"
                                   type="text"
                                   value={this.props.title}
                                   placeholder="Title"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>
                            <textarea
                                className="form-control"
                                value={this.props.description}
                                placeholder="Description"/>
                        </td>
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