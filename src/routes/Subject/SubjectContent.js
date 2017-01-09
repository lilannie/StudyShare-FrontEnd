import React from 'react';
import {withRouter} from 'react-router';

import SubjectItem from './SubjectItem';

import {
    Row,
    Col,
    Grid,
    PanelBody,
} from '@sketchpixy/rubix';

@withRouter
export default class SubjectContent extends React.Component {
    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    mapItems(item) {
        return <SubjectItem itemId={item.id} name={item.name}
                            labelValue={this.props.labels[item.labelId].name}
                            labelClass={this.props.labels[item.labelId].badgeClass}
                            description={item.description}
                            date={item.date}/>;
    }

    render() {

        var items =  this.props.contents.map(this.mapItems.bind(this));
        return (
            <PanelBody className='panel-sm-9 panel-xs-12' style={{paddingTop: 0}}>
                <Grid>
                    <Row>
                        <h3>Content</h3>
                        <Col xs={12}>
                            {items}
                        </Col>
                    </Row>
                </Grid>
            </PanelBody>
        );
    }
}
