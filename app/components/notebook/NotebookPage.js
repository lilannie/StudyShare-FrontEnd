import React from 'react';

import '../../scss/notebook.scss';

export default class NotebookPage extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="notebook-editor-container">
                <div id="notebook-editor" className="notebook-editor">
                    <p>Hello World!</p>
                    <p>Some initial <strong>bold</strong> text</p>
                    <p><br/></p>
                </div>
            </div>
        );
    }

}