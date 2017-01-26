import React from 'react';

import {Row, Col} from 'react-bootstrap';

import GroupNavTab from './GroupNavTab';
import GroupNavContent from './GroupNavContent';
import GroupNewsFeed from './GroupNewsFeed';

import '../../scss/group.scss';

export default class GroupNav extends React.Component {
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
            <div className="group-nav">
                <div className="col-xs-9">
                    <Row>
                        <div id="group-nav" className="container-fluid">
                            <ul className="nav nav-pills">
                                <GroupNavTab active={true}
                                             title={'Timeline'}
                                             tabId={'#tab-0'} />
                                <GroupNavTab active={false}
                                             title={'Groups'}
                                             tabId={'#tab-1'} />
                                <GroupNavTab active={false}
                                             title={'Settings'}
                                             tabId={'#tab-2'} />
                            </ul>

                            <div className="tab-content clearfix">
                                <GroupNavContent tabId={"tab-0"}
                                                 content={<GroupNewsFeed />}
                                                 active={true} />
                                <GroupNavContent tabId={"tab-1"}
                                                 content={<GroupNewsFeed />}
                                                 active={false} />
                                <GroupNavContent tabId={"tab-2"}
                                                 content={<GroupNewsFeed />}
                                                 active={false} />
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
        );
    }
}