import React from 'react';

import ContentHeader from 'ContentHeader';
import ContentSidebar from 'ContentSidebar';
import ContentBody from 'ContentBody';
import DeckSidebar from './DeckSidebar';
import DeckBody from './DeckBody';

export default class Deck extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        decks: [
            {
                id: 0,
                title: "Derivatives",
                description: "Calculus Derivatives"
            },
            {
                id: 1,
                title: "Integrals",
                description: "Calculus Integrals"
            }
        ]

    };

    render() {
        return (
            <div>
                <ContentHeader title="Decks"/>
                <ContentSidebar list={<DeckSidebar/>} />
                <ContentBody children={
                    <DeckBody decks={this.state.decks}/>
                }/>
            </div>
        );
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

}