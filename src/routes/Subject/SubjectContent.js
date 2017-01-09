import React from 'react';
import {withRouter} from 'react-router';

import SubjectItem from './SubjectItem';

import {
    Row,
    Col,
    Grid,
    PanelBody,
    LoremIpsum,
} from '@sketchpixy/rubix';

@withRouter
export default class SubjectContent extends React.Component {

    render() {
        return (
            <PanelBody className='panel-sm-9 panel-xs-12' style={{paddingTop: 0}}>
                <Grid>
                    <Row>
                        <h3>Content</h3>
                        <Col xs={12}>
                            <SubjectItem itemId={1} name='Derivatives'
                                         labelValue='SOME LABEL' labelClass='bg-green fg-white'
                                         description={<span><strong>Early access: </strong><span><LoremIpsum
                                             query='1s'/></span></span>} date='Aug 20th'/>
                            <SubjectItem itemId={2}  name='Integrals'
                                         labelValue='SOME LABEL' labelClass='bg-orange fg-white'
                                         description={<span><LoremIpsum query='1s'/></span>} date='Aug 19th'/>
                            <SubjectItem itemId={3}  name='Summations'
                                         labelValue='SOME LABEL' labelClass='bg-blue fg-white'
                                         description={<span><LoremIpsum query='1s'/></span>} date='Aug 18th'/>
                            <SubjectItem itemId={4}  name='Rotations'
                                         labelValue='SOME LABEL' labelClass='bg-red fg-white'
                                         description={<span><LoremIpsum query='1s'/></span>} date='Aug 17rd'/>
                        </Col>
                    </Row>
                </Grid>
            </PanelBody>
        );
    }
}
