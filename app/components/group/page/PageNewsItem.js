import React from 'react';

import AvatarHeader from '../AvatarHeader';
import NewsLikeDisplay from '../NewsLikeDisplay';

import {
    PanelBody,
} from '@sketchpixy/rubix';

import '../../scss/group.scss';

export default class GroupNewsFeed extends React.Component {
    static defaultProps = {
        panelStyle: {
            "backgroundColor": "white"
        },
        panelBodyStyle: {
            padding: 10,
            paddingTop: 2,
            color: "#1b6d85"
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
        return (
            <div className="panel" style={this.props.panelStyle}>
                <PanelBody style={this.props.panelBodyStyle}>
                    <div className="ribbon-left">
                        Share
                    </div>
                    <AvatarHeader/>
                    <div className='panel-body'>
                        {"I'll be out of my mind and you'll be out of ideas pretty soon. So let's spend the afternoon in a cold hot air balloon. Leave your jacket behind. Lean out and touch the tree tops over town. I can't wait to kiss the ground wherever we touch back down."}
                    </div>
                    <NewsImage />
                </PanelBody>

                <NewsLikeDisplay />
            </div>
        );
    }
}