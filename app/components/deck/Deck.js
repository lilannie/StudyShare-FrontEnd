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
        foo: 'bar'
    };

    render() {
        return (
            <div>
                <ContentHeader title="Decks"/>
                <ContentSidebar list={<DeckSidebar/>} />
                <ContentBody children={<DeckBody />}/>
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