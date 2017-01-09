import React from 'react';
import {withRouter} from 'react-router';

import {
    Row,
    Col,
    Icon,
    Grid,
    Button,
    ButtonGroup,
    ButtonToolbar,
} from '@sketchpixy/rubix';

@withRouter
export default class SubjectToolbar extends React.Component {
    handleClick () {}


    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={8} style={{paddingTop: 12.5, paddingBottom: 12.5}}>
                        <ButtonToolbar className='inbox-toolbar'>
                            <ButtonGroup>
                                <Button bsStyle='blue' onClick={this.handleClick()}>
                                    <Icon glyph='icon-fontello-edit-1'/>
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup className='hidden-xs'>
                                <Button outlined onlyOnHover bsStyle='success' className='text-center'><Icon glyph=''/>Edit</Button>
                                <Button outlined onlyOnHover bsStyle='danger'><Icon
                                    glyph='icon-fontello-trash-1'/></Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Col>
                    <Col xs={4} style={{paddingTop: 12.5, paddingBottom: 12.5}} className='text-right'>
                        <div className='inbox-avatar'>
                            <div className='inbox-avatar-name hidden-xs hidden-sm'>
                                <div>Subjects</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
