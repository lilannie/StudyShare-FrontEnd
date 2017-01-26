import React from 'react';

import GroupToolbar from './GroupToolbar';
import GroupDashboardContent from './GroupDashboardContent';
import '../../../scss/group-dashboard.scss';

export default class GroupPageBody extends React.Component {
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
            <div className="group-dashboard">
                <GroupToolbar />
                <GroupDashboardContent />
            </div>
        );
    }
}