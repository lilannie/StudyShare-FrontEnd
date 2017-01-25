import React from 'react';

import {
    Row,
    Col,
    Icon,
    Grid,
    Button,
    PanelBody,
    PanelFooter,
    FormControl,
} from '@sketchpixy/rubix';

export default class GroupStatusBox extends React.Component {
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        var panelStyle = {
            "backgroundColor": "#1b6d85"
        };

        var panelBodyStyle = {
            "padding": 25,
            "paddingTop": 12.5,
            "color": "white"
        };

        var iconStyle = {
            marginRight: 25,
            color: "white"
        };

        return (
            <div className="panel" style={panelStyle}>
                <PanelBody style={panelBodyStyle}>
                    <FormControl componentClass='textarea' rows='3'
                                 placeholder="Share with the group..."
                                 style={{border: 'none'}}/>
                </PanelBody>
                <PanelFooter className='fg-black75 bg-gray' style={{padding: '12.5px 25px'}}>
                    <Grid>
                        <Row>
                            <Col xs={6} collapseLeft collapseRight>
                                <a href=''>
                                    <Icon className="status-link"
                                        glyph='fa fa-2x fa-plus-square-o'
                                        style={iconStyle}/>
                                </a>
                                <a className="status-link"
                                   href=''>
                                    <Icon
                                        glyph='fa fa-2x fa-picture-o'
                                        style={iconStyle}/>
                                </a>
                                <a className="status-link"
                                   href=''>
                                    <Icon
                                        glyph='fa fa-2x fa-paperclip'
                                        style={iconStyle}/>
                                </a>
                            </Col>
                            <div className='text-right'>
                                <button className='btn theme-button-white'>
                                    Send
                                </button>
                            </div>
                        </Row>
                    </Grid>
                </PanelFooter>
            </div>

        );
    }
}