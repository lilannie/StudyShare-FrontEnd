import React from 'react';

import '../../scss/group.scss';
import GroupCover from 'GroupCover';

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
                <GroupCover background={'/images/gallery/math.jpg'}/>
                <div className="group-page-body">
                </div>
            </div>
        );
    }
}