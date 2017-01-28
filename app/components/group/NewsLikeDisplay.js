import React from 'react';

import {
    Row,
    Col,
    Grid,
    Icon,
    PanelFooter,
} from '@sketchpixy/rubix';

import '../../scss/group.scss';

export default class NewsLikeDisplay extends React.Component {
    static defaultProps = {
        containerStyle: {
            padding: '12.5px 25px',
            margin: 0
        },
        linkStyle: {
            border: 'none',
            marginRight: 25,
            backgroundColor: "white",
            padding: "18px 20px 6px",
            borderRadius: 2,
        },
        likeSpan: {
            position: 'relative',
            top: -2,
            left: 3,
            fontSize: 20,
            color: "#ED6B75"
        },
        iconStyle: {
            color: "#ED6B75"
        },
        likeCountSpan: {
            fontWeight: 1,
            fontSize: 20,
            top: -10,
            right: 20,
            position: 'relative',
            color: "#ED6B75"
        },
        countStyle: {
            fontSize: 30,
            fontWeight: 2
        }
    };

    render() {
        return (
            <PanelFooter className='like-container'
                         style={this.props.containerStyle}>
                <Grid className=''>
                    <Row>
                        <Col xs={6} collapseLeft collapseRight>
                            <a href='#' className='fg-text'
                               style={this.props.linkStyle}>
                                <Icon style={this.props.iconStyle} glyph='fa fa-2x fa-thumbs-o-up'/>
                                <span style={this.props.likeSpan}>Like</span>
                            </a>
                        </Col>
                        <Col xs={6} className='text-right' collapseLeft collapseRight>
                                <span style={this.props.likeCountSpan}>
                                    <strong style={this.props.countStyle}>523 </strong>people like this
                                </span>
                        </Col>
                    </Row>
                </Grid>
            </PanelFooter>
        );
    }
}