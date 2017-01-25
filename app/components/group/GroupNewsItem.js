import React from 'react';

import GroupStatusBox from './GroupStatusBox';

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
            <div className="panel" style={panelStyle}>
                <PanelBody style={panelBodyStyle}>
                    <div className='inbox-avatar'>
                        <img src='/imgs/app/avatars/avatar7.png' width='40' height='40'/>
                        <div className='inbox-avatar-name'>
                            <div className='fg-darkgrayishblue75'>Toby King</div>
                            <div className='fg-text'>
                                <small>Wisconsin, USA</small>
                            </div>
                        </div>
                        <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                            <div style={{position: 'relative', top: 0}}><Icon
                                glyph='icon-fontello-anchor icon-1-and-quarter-x'/></div>
                            <div style={{position: 'relative', top: -10}}>
                                <small><strong>2 hours ago</strong></small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='fg-text'>
                            {"I'll be out of my mind and you'll be out of ideas pretty soon. So let's spend the afternoon in a cold hot air balloon. Leave your jacket behind. Lean out and touch the tree tops over town. I can't wait to kiss the ground wherever we touch back down."}
                        </div>
                    </div>
                    <div style={{margin: -25, marginTop: 25}}>
                        <Image responsive
                               src='/imgs/app/gallery/tumblr_n8zm8ndGiY1st5lhmo1_1280.jpg'/>
                    </div>
                </PanelBody>
                <PanelFooter className='fg-black75 bg-gray'
                             style={{padding: '12.5px 25px', margin: 0}}>
                    <Grid className='fg-text'>
                        <Row>
                            <Col xs={6} collapseLeft collapseRight>
                                <a href='#' className='fg-text'
                                   style={{border: 'none', marginRight: 25}}><Icon
                                    glyph='icon-dripicons-thumbs-up icon-1-and-quarter-x'/><span
                                    style={{position: 'relative', top: -2, left: 3}}>Like</span></a>
                            </Col>
                            <Col xs={6} className='text-right' collapseLeft collapseRight>
                                                        <span
                                                            style={{top: 5, position: 'relative'}}><strong>523</strong> people like this</span>
                            </Col>
                        </Row>
                    </Grid>
                </PanelFooter>
                <PanelFooter style={{padding: 25, paddingTop: 0, paddingBottom: 0}}>
                    <div className='inbox-avatar' style={{borderBottom: '1px solid #EAEDF1'}}>
                        <img src='/imgs/app/avatars/avatar0.png' width='30' height='30'
                             style={{verticalAlign: 'top', top: 10, position: 'relative'}}/>
                        <div className='inbox-avatar-name'>
                            <div className='fg-darkgrayishblue75'>Anna Sanchez</div>
                            <div className='fg-text'>
                                <small>Nice!</small>
                            </div>
                        </div>
                        <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                            <div>
                                <small><strong>22 minutes ago</strong></small>
                            </div>
                        </div>
                    </div>
                    <div className='inbox-avatar' style={{borderBottom: '1px solid #EAEDF1'}}>
                        <img src='/imgs/app/avatars/avatar9.png' width='30' height='30'
                             style={{verticalAlign: 'top', top: 10, position: 'relative'}}/>
                        <div className='inbox-avatar-name'>
                            <div className='fg-darkgrayishblue75'>Ava Parry</div>
                            <div className='fg-text'>
                                <small>Woah! Beautiful pic and beautiful quote! Whats the
                                    source?
                                </small>
                            </div>
                        </div>
                        <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                            <div>
                                <small><strong>2 minutes ago</strong></small>
                            </div>
                        </div>
                    </div>
                    <div className='inbox-avatar' style={{borderBottom: '1px solid #EAEDF1'}}>
                        <img src='/imgs/app/avatars/avatar7.png' width='30' height='30'
                             style={{verticalAlign: 'top', top: 10, position: 'relative'}}/>
                        <div className='inbox-avatar-name'>
                            <div className='fg-darkgrayishblue75'>Ava Parry</div>
                            <div className='fg-text'>
                                <small>Thanks guys! Appreciate! :)</small>
                            </div>
                            <div className='fg-text'>
                                <small>Source: <em>Owl City, Ocean Eyes</em></small>
                            </div>
                        </div>
                        <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                            <div>
                                <small><strong>few seconds ago</strong></small>
                            </div>
                        </div>
                    </div>
                </PanelFooter>
                <PanelFooter style={{padding: 12.5}}>
                    <FormControl componentClass='textarea' rows='1'
                                 placeholder='Write a comment...'
                                 style={{border: 'none'}}/>
                </PanelFooter>
            </div>
        );
    }
}