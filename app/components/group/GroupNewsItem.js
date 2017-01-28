import React from 'react';

import AvatarHeader from './AvatarHeader';
import NewsImage from './NewsImage';
import NewsLikeDisplay from './NewsLikeDisplay';
import NewsComments from './NewsComments';
import NewsCommentBox from './NewsCommentBox';

import {
    PanelBody,
} from '@sketchpixy/rubix';

import '../../scss/group.scss';

export default class GroupNewsItem extends React.Component {
    static defaultProps = {
        id: 0,
        message: 'Ill be out of my mind and youll be out of ideas pretty soon. So lets spend the afternoon in a cold hot air balloon. Leave your jacket behind. Lean out and touch the tree tops over town. I cant wait to kiss the ground wherever we touch back down.',
        groupPage: false,
        avatarHeader: (<AvatarHeader/>),
        newsImage: (<NewsImage />),
        newsLikeDisplay: (<NewsLikeDisplay />),
        shareClass: 'ribbon-left',
        panelStyle: {
            "backgroundColor": "white"
        },
        panelBodyStyle: {
            padding: 10,
            paddingTop: 2,
            color: "#1b6d85"
        },
        messageStyle: {
            border: 0
        }
    };

    render() {
        var footer = "";
        var ribbon = "";

        if (!this.props.groupPage) {
            footer = [
                ( <NewsComments key={"coments-" + this.props.id }/>),
                ( <NewsCommentBox key={"comentbox-" + this.props.id }/>)
            ];

            ribbon = (<div className={this.props.shareClass}>
                Share
            </div>);
        }

        return (
            <div className="panel" style={this.props.panelStyle}>
                <PanelBody style={this.props.panelBodyStyle}>
                    {ribbon}

                    {this.props.avatarHeader}

                    <div className='panel-body' style={this.props.messageStyle}>
                        {this.props.message}
                    </div>

                    {this.props.newsImage}
                </PanelBody>
                {this.props.newsLikeDisplay}
                {footer}
            </div>
        );
    }
}