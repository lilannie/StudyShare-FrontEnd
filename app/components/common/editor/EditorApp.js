import React from 'react';

import {Row, Col} from 'react-bootstrap';
import {Editor, EditorState} from 'draft-js';


export default class EditorApp extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {editorState: EditorState.createEmpty()};

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange (editorState) {

        this.setState({editorState});
    }

    render() {
        return (
            <Editor style={{"height": 700}} editorState={this.state.editorState}
                    onChange={this.onChange} />
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