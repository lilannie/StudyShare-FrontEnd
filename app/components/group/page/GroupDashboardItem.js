import React from 'react';
import {
    Icon
} from '@sketchpixy/rubix';

import Accordion from 'Accordion';

import '../../../scss/group-dashboard.scss';

export default class GroupDashboardItem extends React.Component {
    static defaultProps = {
        subjects: [
            {
                id: 0,
                title: "Calculus",
                description: "Calculus is the study of how things change. It provides a framework for modeling systems in which there is change, and a way to deduce the predictions of such models. Calculus is the study of how things change. It provides a framework for modeling systems in which there is change, and a way to deduce the predictions of such models.",
                content: [
                    {
                        id: 0,
                        title: "Derivatives",
                        type: "Notebook",
                        description: "Brief overview of derivatives",
                        date_created: "01/01/2017",
                        last_modified: "01/07/2017"
                    },
                    {
                        id: 1,
                        title: "Integrals",
                        type: "Notecards",
                        description: "Brief overview of integrals",
                        date_created: "01/01/2017",
                        last_modified: "01/07/2017"
                    }
                ]
            },
            {
                id: 1,
                title: "Algorithms",
                description: "What are algorithms and why should you care? We'll start with an overview of algorithms and then discuss two games that you could use an algorithm to solve more efficiently - the number guessing game and a route-finding game.",
                content: [
                    {
                        id: 2,
                        title: "Binary Search",
                        type: "Notebook",
                        description: "Notes on binary search",
                        date_created: "01/01/2017",
                        last_modified: "01/07/2017"
                    },
                    {
                        id: 3,
                        title: "Mergesort",
                        type: "Notecards",
                        description: "Review the Mergesort steps",
                        date_created: "01/01/2017",
                        last_modified: "01/07/2017"
                    }
                ]
            }
        ]
    };
    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);
        this.getContent = this.getContent.bind(this);
        this.convertSubjectsToAccordion = this.convertSubjectsToAccordion.bind(this);
    }

    convertSubjectsToAccordion() {
        return this.props.subjects.map(function (subject) {

            let contents = subject.content.map(function (item) {
                return {
                    headerId: item.id,
                    title: item.title,
                    content: item.type + ': ' + item.description,
                    h3: []
                };
            });

            return {
                headerId: subject.id,
                title: subject.title,
                content: subject.description,
                h2: contents
            }
        });

    }

    getContent() {
        switch (this.props.type) {
            case 0: {
                // Subjects
                return (
                    <Accordion h1={this.convertSubjectsToAccordion()}/>
                );
            }
            case 1: {
                // Notebooks
                return (
                    <Accordion h1={this.convertSubjectsToAccordion()}/>
                );
            }
            case 2: {
                // Notecards
                return (
                    <Accordion h1={this.convertSubjectsToAccordion()}/>
                );
            }
            case 3: {
                // Discussion
                return (
                    <Accordion h1={this.convertSubjectsToAccordion()}/>
                );
            }
            case 4: {
                // Members
                return (
                    <Accordion h1={this.convertSubjectsToAccordion()}/>
                );
            }
            case 5: {
                // Settings
                return (
                    <Accordion h1={this.convertSubjectsToAccordion()}/>
                );
            }
        }
    }

    render() {
        return (
            <li className="span3">
                <h3 className="item-title">
                    <Icon glyph={this.props.glyph}
                            style={this.props.style} />
                    {'  '+this.props.title}
                    </h3>
                <div className="content">
                    {this.getContent()}
                </div>
            </li>

        );
    }
}