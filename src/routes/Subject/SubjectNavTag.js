import React from 'react';
import {withRouter} from 'react-router';


import {
    Row,
    Col,
    Grid,
    Badge,
} from '@sketchpixy/rubix';


@withRouter
export default class SubjectNavTag extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} collapseLeft collapseRight>
                        <Badge className={this.props.badgeClass}>{' '}</Badge>
                        <span>{this.props.title}</span>
                    </Col>
                </Row>
            </Grid>
        );
    }
}