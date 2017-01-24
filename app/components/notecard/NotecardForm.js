import React from 'react';
import RichEditor from 'RichEditor';

export default class NotecardForm extends React.Component {
    static defaultProps = {
        front: "FRONT SIDE TEXT",
        back: "BACK SIDE TEXT"
    };

    state = {
        foo: "bar"

    };

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="modal-body">
                <h5>
                    Front
                </h5>
                <textarea className="form-control" placeholder="Front"
                          value={this.props.front}  />
                <hr/>
                <h5>
                    Back
                </h5>
                <textarea className="form-control" placeholder="Back"
                          value={this.props.back}  />            </div>
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
