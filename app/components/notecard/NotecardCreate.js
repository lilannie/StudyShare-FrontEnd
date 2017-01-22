import React from 'react';
import RichEditor from 'RichEditor';

export default class NotecardCreate extends React.Component {
    static defaultProps = {
        foo: "bar"
    };

    state = {
        foo: "bar"

    };

    constructor(props) {
        super(props);

        this.addCard = this.addCard.bind(this);
    }

    addCard() {
        console.log("Add Card");
    }

    render() {
        return (
            <div className="modal fade" id="addCardModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                               Add Notecard
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" >
                                <span>&times;</span>
                            </button>
                        </div>
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
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
