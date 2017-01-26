import React from 'react';

import '../../scss/group.scss';
import GroupCover from 'GroupCover';
import GroupSidebar from './GroupSidebar';
import GroupPageDashboard from './GroupPageDashboard';

export default class GroupPage extends React.Component {
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
            <div className="group-page">
                <GroupCover background={'/images/gallery/math.jpg'}
                    title={this.props.title}/>
                <div className="group-page-body">
                    <GroupSidebar />
                    <GroupPageDashboard />
                </div>
            </div>
        );
    }
}