import React from 'react';

import '../../scss/group.scss';

export default class GroupNavTab extends React.Component {
    static defaultProps = {
        active: false,
        tabId: "#tab-0",
        content: (<h1>FAKE CONTENT</h1>)
    };

    state = {
        foo: 'bar'
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        if (this.props.active) {
            return (
                <div className="tab-pane active" id={this.props.tabId}>
                    {this.props.content}
                </div>
            );
        }
        return (
            <div className="tab-pane" id={this.props.tabId}>
                {this.props.content}
            </div>
        );
    }
}