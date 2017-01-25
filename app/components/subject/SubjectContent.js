import React from 'react';
import SubjectAll from './SubjectAll';

export default class SubjectContent extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {

        var subjects = [
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
        ];
        return (
            <SubjectAll subjects={subjects}/>
        );
    }

    componentWillMount() {}

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

}