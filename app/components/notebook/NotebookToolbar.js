import React from 'react';

import {ButtonToolbar,
    ButtonGroup,
    Button,
    Glyphicon}
    from 'react-bootstrap';
import {Link} from 'react-router';

export default class NotebookToolbar extends React.Component {
    static defaultProps = {
        buttonStyle: {
        },
    };

    state = {
        foo: "bar"

    };

    constructor(props) {
        super(props);

        this.addCard = this.addCard.bind(this);
    }

    addCard() {
    }

    render() {
        return (
            <ButtonToolbar className="content-toolbar">
                <ButtonGroup>
                    <Button style={this.props.buttonStyle}
                            className="btn-lg notebook-add-button"
                            data-toggle="modal"
                            data-target="#addModal">
                        <h4>
                            <Glyphicon glyph="plus" /> Add
                        </h4>
                    </Button>
                </ButtonGroup>
            </ButtonToolbar>
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
