import React from 'react';

import ContentHeader from 'ContentHeader';
import GroupNewsFeed from './GroupNewsFeed';

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

export default class Group extends React.Component {
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="group">
                <ContentHeader title="Groups"/>
                <GroupNewsFeed />
            </div>
        );
    }
}