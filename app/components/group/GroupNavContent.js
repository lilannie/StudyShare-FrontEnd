import React from 'react';

import '../../scss/group.scss';

export default class GroupNavContent extends React.Component {
    static defaultProps = {
        active: false,
        tabId: '#tab-0',
        title: 'FAKE TAB'
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
                <li className="active">
                    <a href={this.props.tabId}
                       data-toggle="tab">
                        {this.props.title}
                    </a>
                </li>
            );
        }
        return (
            <li>
                <a href={this.props.tabId}
                   data-toggle="tab">
                    {this.props.title}
                </a>
            </li>
        );
    }
}