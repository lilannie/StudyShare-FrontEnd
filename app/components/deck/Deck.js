import React from 'react';

import ContentHeader from 'ContentHeader';
import ContentSidebar from 'ContentSidebar';
import ContentBody from 'ContentBody';
import DeckSidebar from './DeckSidebar';
import DeckBody from './DeckBody';
import DeckCreate from './DeckCreate';

export default class Deck extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        decks: [
            {
                id: 0,
                title: "Derivatives",
                description: "Calculus Derivatives",
                cards: []
            },
            {
                id: 1,
                title: "Integrals",
                description: "Calculus Integrals",
                cards: []
            }
        ],
        viewId: 0
    };

    constructor(props) {
        super(props);

        this.changeView = this.changeView.bind(this);
        this.getView = this.getView.bind(this);
    }

    changeView(id) {
        this.setState({viewId: id});
    }

    getView() {
        switch(this.state.viewId) {
            case 0: {
                console.log("Body View");
                return <DeckBody decks={this.state.decks}/>;
            }
            case 1: {
                console.log("Deck Create");
                return <DeckCreate/>;
            }
        }
    }
    render() {
        return (
            <div>
                <ContentHeader title="Decks"/>
                <ContentSidebar list={<DeckSidebar
                    viewId={this.state.viewId}
                    changeView={this.changeView}/>} />
                <ContentBody children={this.getView()}/>
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