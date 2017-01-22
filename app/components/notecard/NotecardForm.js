import React from 'react';
import RichEditor from 'RichEditor';

export default class NotecardForm extends React.Component {
    static defaultProps = {
        foo: "bar"
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
                <RichEditor />
                <hr/>
                <h5>
                    Back
                </h5>
                <RichEditor />
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
