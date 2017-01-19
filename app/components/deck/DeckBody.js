import React from 'react';

import EditorApp from 'RichEditor';
import '../../scss/editor.scss';

export default class DeckBody extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="well text-editor ">
                <EditorApp  />
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