import React from 'react';

import Accordion from 'Accordion';

import '../../../scss/group-dashboard.scss';

export default class GroupDashboardItem extends React.Component {
    static defaultProps = {
        subject: [
            {
                id: 0,
                title: 'Calculus',
                description: 'Calculus is the study of how things change. It provides a framework for modeling systems in which there is change, and a way to deduce the predictions of such models. Calculus is the study of how things change. It provides a framework for modeling systems in which there is change, and a way to deduce the predictions of such models.',
                dateCreated: '01-01-2017'
            },

            {
                id: 1,
                title: 'Algorithms',
                description: 'What are algorithms and why should you care? Well start with an overview of algorithms and then discuss two games that you could use an algorithm to solve more efficiently - the number guessing game and a route-finding game.',
                dateCreated: '01-01-2017'
            },
        ]
    };
    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);
        this.getContent = this.getContent.bind(this);
    }

    getContent() {
        switch (this.props.type) {
            case 0: {
                // Subjects
                return (
                    <Accordion />
                );
            }
            case 1: {
                // Notebooks
                break;
            }
            case 2: {
                // Notecards
                break;
            }
            case 3: {
                // Discussion
                break;
            }
            case 4: {
                // Members
                break;
            }
            case 5: {
                // Settings
                break;
            }
        }
    }

    render() {
        return (
            <li className="span3">
                <h3 className="item-title">{this.props.title}</h3>
                <div className="content">
                    {this.getContent()}
                </div>
            </li>

        );
    }
}