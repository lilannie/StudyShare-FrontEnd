import React from 'react';
import ContentHeader from 'ContentHeader';
import ExploreToolbar from './explore/ExploreToolbar';
import ExploreCarousel from './explore/ExploreCarousel';
import ExploreCard from './explore/ExploreCard';
import ExploreInfoCard from './explore/ExploreInfoCard';

import '../../scss/browse.scss';

export default class Browse extends React.Component {
    static defaultProps = {
        activeContent: 'Subjects'
    };

    constructor(props) {
        super(props);

        this.getCards = this.getCards.bind(this);
    }

    getCards() {
        return this.props.cards.map(function (card) {
            return (<ExploreCard/>);
        });
    }

    render() {
        return (
            <div className="browse-body-container">
                <div className="container-fluid">
                    <ContentHeader title="Explore Content"/>
                    <div className="browse-body">
                        <div className="row">
                            <ExploreToolbar />
                            <div className="col-md-6">
                                <h1>{this.props.activeContent}</h1>
                                <div className="row">
                                    {this.getCards()}
                                    <ExploreInfoCard />
                                </div>
                            </div>
                        </div>
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