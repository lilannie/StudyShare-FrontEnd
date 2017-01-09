import React from 'react';
import {withRouter} from 'react-router';

import SubjectContent from './SubjectContent';
import SubjectToolbar from './SubjectToolbar';
import SubjectSidebar from './SubjectSidebar';

import {
    Panel,
    PanelBody,
    PanelContainer,
} from '@sketchpixy/rubix';

@withRouter
export default class Subjects extends React.Component {
    getInitialState() {
        return {
            selected: {
                subject: 1,
                items: [],
            },
            subjects: {
                1: {
                    id: 1,
                    name: 'Calculus',
                    content: [
                        {
                            id: 1,
                            name: 'Derivatives',
                            labelId: 2,
                            description: 'Review Derivatives with this notecard deck!'
                        }
                    ]
                },
                2: {
                    id: 2,
                    name: 'Physics',
                    content: [
                        {
                            id: 2,
                            name: 'Acceleration',
                            labelId: 1,
                            description: 'Learn about acceleration!'
                        }
                    ]
                },
                3: {
                    id: 3,
                    name: 'Data Structures',
                    content: [
                        {
                            id: 3,
                            name: 'Binary Search Trees',
                            labelId: 3,
                            description: 'Here is an animation on Binary Search Trees!'
                        }
                    ]
                },
            },
            tags: [
                {
                    id: 1,
                    name: 'Note',
                    badgeClass: 'bg-green fg-white',
                },
                {
                    id: 2,
                    name: 'Notecard Deck',
                    badgeClass: 'bg-red fg-white',
                },
                {
                    id: 3,
                    name: 'Animation',
                    badgeClass: 'bg-blue fg-white',
                },
            ],


        }
    }

    changeContent() {

    }


    render() {
        return (
            <PanelContainer className='subjects' collapseBottom>
                <Panel>
                    <PanelBody style={{paddingTop: 0}}>
                        <SubjectToolbar />

                        <hr style={{margin: 0}}/>
                        <Panel horizontal>

                            <SubjectSidebar />
                            <SubjectContent contents={this.state.subjects[this.state.selected.subject].content}/>

                        </Panel>
                    </PanelBody>
                </Panel>
            </PanelContainer>
        );
    }
}
