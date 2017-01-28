import React from 'react';

import {
    Row
} from '@sketchpixy/rubix';

import '../../scss/group.scss';

export default class AvatarHeader extends React.Component {
    static defaultProps = {
        name: 'Toby King',
        imgSrc: '/images/avatars/guy.png',
        university: 'Iowa State University',
        time: '2 hours ago',
        h3Classes: 'name text-right',
        h3Style: {
            border: 0
        },
        h4Classes: 'company text-right',
        h4Style: {
            border: 0
        },
        imageStyle: {
            margin: '0px 0px 0px 15px'
        },
        avatarStyle: {
            marginRight: 20
        },
        timeStyle: {
            position: 'relative',
            top: -10
        },
        groupPage: false
    };

    constructor(props) {
        super(props);
    }

    render() {
        var header = (
            <h3 className={this.props.h3Classes} style={this.props.h3Style}>
                {this.props.name}
                <img src={this.props.imgSrc}
                     width='50' height='50'
                     style={this.props.imageStyle}/>
            </h3>
        );
        if (this.props.groupPage) {
            header = (
                <h3 className={this.props.h3Classes} style={this.props.h3Style}>
                    <img src={this.props.imgSrc}
                         width='50' height='50'
                         style={this.props.imageStyle}/>
                    {this.props.name}
                </h3>
            );
        }

        return (
            <Row>
                <div className='avatar' style={this.props.avatarStyle}>
                    {header}
                    <h4 className={this.props.h4Classes}
                        style={this.props.h4Style}>{this.props.university}</h4>

                    <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                        <div style={this.props.timeStyle}>
                            <small><strong>{this.props.time}</strong></small>
                        </div>
                    </div>
                </div>
            </Row>
        );
    }
}