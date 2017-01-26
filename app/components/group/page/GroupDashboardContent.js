import React from 'react';

import '../../../scss/group-dashboard.scss';

export default class GroupDashboardContent extends React.Component {
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
        return (
            <div className="group-dashboard-content">

            </div>
        );
    }
}