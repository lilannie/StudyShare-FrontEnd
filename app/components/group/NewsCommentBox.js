import React from 'react';

import {
    FormControl,
    PanelFooter,
} from '@sketchpixy/rubix';

export default class NewsCommentBox extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        var footerStyle = {
            padding: 12.5
        };
        var formStyle = {
            border: 'none'
        };

        return (
            <PanelFooter style={footerStyle}>
                <FormControl componentClass='textarea' rows='1'
                             placeholder='Write a comment...'
                             style={formStyle}/>
            </PanelFooter>
        );
    }
}