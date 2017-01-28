import React from 'react';

import GroupStatusBox from './GroupStatusBox';
import GroupNewsItem from './GroupNewsItem';

import {
    Row,
    Col
} from '@sketchpixy/rubix';

import '../../scss/group.scss';

export default class GroupNewsFeed extends React.Component {
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
        var bodyStyle = {
            marginTop: 10,
            padding : "5px 15px"
        };
        return (
            <div className='group-body' style={bodyStyle}>
                <Row>
                    <Col className="newsfeed-left" sm={6} collapseRight>
                        <GroupStatusBox />
                        <GroupNewsItem />
                    </Col>
                    <Col className="newsfeed-right" sm={6}>
                        <GroupNewsItem />
                    </Col>
                </Row>

            </div>
        );
    }
}