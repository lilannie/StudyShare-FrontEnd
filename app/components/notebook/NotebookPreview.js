import React from 'react';
import NotebookItem from './NotebookItem';

export default class NotebookContent extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        notebooks: [
            {
                id: 0,
                title: "Book 1",
                summary: "Calculus is the study of how things change. It provides a framework for modeling systems in which there is change, and a way to deduce the predictions of such models. Calculus is the study of how things change. It provides a framework for modeling systems in which there is change, and a way to deduce the predictions of such models.",
            },
            {
                id: 1,
                title: "foobar",
                summary: "What are algorithms and why should you care? We'll start with an overview of algorithms and then discuss two games that you could use an algorithm to solve more efficiently - the number guessing game and a route-finding game.",
            }
        ]
    };

    constructor(props) {
        super(props);

        this.getItems = this.getItems.bind(this);
    }

    getItems() {
        return this.state.notebooks.map(function (subject) {
            return <NotebookItem key={"subject-"+subject.id}
                                title={subject.title}
                                description={subject.summary} />;
        });
    }

    render() {
        return (
            <div>
                {this.getItems()}
            </div>
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