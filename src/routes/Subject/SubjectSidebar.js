import React from 'react';
import {withRouter} from 'react-router';

import SubjectNavItem from './SubjectNavItem';
import SubjectNavTag from './SubjectNavTag';


import {
    Row,
    Col,
    Grid,
    ListGroup,
    ListGroupItem,
    PanelLeft,
} from '@sketchpixy/rubix';

@withRouter
export default class SubjectSidebar extends React.Component {

    render() {
        return (
            <PanelLeft className='panel-sm-3 inbox-nav hidden-xs'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h6>
                                <small className='fg-darkgray'>SUBJECTS</small>
                            </h6>
                            <ListGroup className='list-bg-blue'>
                                <ListGroupItem active>
                                    <SubjectNavItem title='Calculus'/>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <SubjectNavItem title='Physics'/>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <SubjectNavItem title='Data Structures'/>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <SubjectNavItem title='English'/>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <SubjectNavItem title='Algorithms'/>
                                </ListGroupItem>
                            </ListGroup>
                            <hr/>
                            <h6>
                                <small className='fg-darkgray'>TAGS</small>
                            </h6>
                            <ListGroup>
                                <ListGroupItem>
                                    <SubjectNavTag title='#classes' badgeClass='bg-green fg-white'/>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <SubjectNavTag title='#fun' badgeClass='bg-red fg-white'/>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Grid>
            </PanelLeft>
        );
    }
}
