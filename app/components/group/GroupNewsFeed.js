import React from 'react';

import GroupStatusBox from './GroupStatusBox';
import GroupNewsItem from './GroupNewsItem';

import {
    Row,
    Col,
    Icon,
    Grid,
    Panel,
    Image,
    Button,
    PanelBody,
    PanelHeader,
    PanelFooter,
    FormControl,
    PanelContainer,
} from '@sketchpixy/rubix';

import '../../scss/group.scss';

export default class GroupNewsFeed extends React.Component {
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        var bodyStyle = {
            marginTop: 10
        }
        var panelStyle = {
            "backgroundColor": "#1b6d85"
        };

        var panelBodyStyle = {
            "padding": 25,
            "paddingTop": 12.5,
            "color": "white"
        };
        return (
            <div className='group-body' style={bodyStyle}>
                <Row >
                    <Col xs={10}>
                        <Row>
                            <Col className="newsfeed-left" sm={5} collapseRight>
                                <GroupStatusBox />
                                <GroupNewsItem />
                            </Col>
                            <Col className="newsfeed-right" sm={5}>
                                <GroupNewsItem />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}