import React from 'react';

import GroupStatusBox from '../GroupStatusBox';
import GroupNewsItem from '../GroupNewsItem';
import AvatarHeader from '../AvatarHeader';

import '../../../scss/group.scss';

export default class DiscussionBody extends React.Component {
    static defaultProps = {
        h3Classes: 'name text-left',
        h3Style: {
            marginLeft: 20,
            fontSize: 'medium'
        },
        h4Classes: 'company text-left',
        h4Style: {
            marginLeft: 71,
            marginTop: -26,
            fontSize: 12
        },
        imageStyle: {
            margin: '-15x 20px 0px -10px'
        },
        timeStyle: {
            position: 'absolute',
            left: 450,
            marginTop: -75
        },
        messageStyle: {
            lineHeight: 1,
            fontSize: 'small',
            maxWidth: 300,
            maxHeight: 200,
            marginTop: -40,
            marginLeft: 181
        },
        panelStyle: {
            backgroundColor: 'white',
            border: '5px solid #333333',
            borderRadius: 10
        }
    };
    state = {
        foo: 'bar'
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        var avatar = (<AvatarHeader groupPage={true}
                                    h3Classes={this.props.h3Classes}
                                    h3Style={this.props.h3Style}
                                    h4Classes={this.props.h4Classes}
                                    h4Style={this.props.h4Style}
                                    imageStyle={this.props.imageStyle}
                                    timeStyle={this.props.timeStyle}/>);

        var likeDisplay = '';
        return (
            <div className="discussion-body">
                <GroupStatusBox formStyle={{maxWidth: "100%"}}/>
                <GroupNewsItem groupPage={true}
                               newsImage=""
                               messageStyle={this.props.messageStyle}
                               avatarHeader={avatar}
                               newsLikeDisplay={likeDisplay}
                               panelStyle={this.props.panelStyle}/>


            </div>
        );
    }
}