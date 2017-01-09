import React from 'react';
import {withRouter} from 'react-router';

import {
    Row,
    Col,
    Grid,
} from '@sketchpixy/rubix';

@withRouter
export default class SubjectNavItem extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={8}>
                        <span>{this.props.title}</span>
                    </Col>
                </Row>
            </Grid>
        );
    }
}