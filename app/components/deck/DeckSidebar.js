import React from 'react';

export default class DeckSidebar extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <ul className="nav nav-pills nav-stacked">
            <li key="subjects-all" className="active">
                <a>All Decks</a>
            </li>
            <li key="subjects-create">
                <a>Create</a>
            </li>
        </ul>
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