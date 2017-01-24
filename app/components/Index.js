import React from 'react';

import ContentHeader from 'ContentHeader';
import BrowseRow from './browse/BrowseRow';
import BrowseRowHeader from './browse/BrowseRowHeader'
import '../scss/index.scss';

export default class Index extends React.Component {
    static defaultProps = {
        content: [
            {
                type: "subjects",
                items: [
                    {
                        title: 'Calculus',
                        description: "Before studying calculus, all students should complete four years of secondary mathematics designed for college-bound students: courses in which they study algebra, geometry, trigonometry, analytic geometry, and elementary functions. These functions include linear, polynomial, rational, exponential, logarithmic, trigonometric, inverse trigonometric, and piecewise-defined functions"
                    }
                ]
            },
        ]
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="index-page">
                <div className="container-fluid">

                    <ContentHeader title="Browse"/>

                    <div className="index-body">
                        <BrowseRowHeader title="Subjects"/>
                        <BrowseRow />
                        <BrowseRowHeader title="Notebooks"/>
                        <BrowseRow />
                        <BrowseRowHeader title="Notecard Decks"/>
                        <BrowseRow />
                    </div>
                </div>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

}