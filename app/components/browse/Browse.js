import React from 'react';
import ContentHeader from 'ContentHeader';
import ExploreToolbar from './explore/ExploreToolbar';
import ExploreCarousel from './explore/ExploreCarousel';
import ExploreCard from './explore/ExploreCard';
import ExploreInfoCard from './explore/ExploreInfoCard';

import '../../scss/browse.scss';

export default class Browse extends React.Component {
    static defaultProps = {
        activeContent: 'Subjects',
        cards: [
            {
                cardId: 0,
                price: '',
                title: 'Calculus I',
                description: 'Before studying calculus, all students should complete four years of secondary mathematics designed for college-bound students: courses in which they study algebra, geometry, trigonometry, analytic geometry, and elementary functions. These functions include linear, polynomial, rational, exponential, logarithmic, trigonometric, inverse trigonometric, and piecewise-defined functions.',
                numReviews: 15,
                numStars: 4,
                imgSrc: '/images/subjects/calculus.jpg'
            },
            {
                cardId: 1,
                price: '',
                title: 'Computer Science Algorithms',
                description: 'What are algorithms and why should you care? Well start with an overview of algorithms and then discuss two games that you could use an algorithm to solve more efficiently - the number guessing game and a route-finding game.',
                numReviews: 30,
                numStars: 3,
                imgSrc: '/images/subjects/algorithms.jpg'
            },
            {
                cardId: 2,
                price: '',
                title: 'Chemistry',
                description: 'Chemistry is the science of matter at or near the atomic scale. (Matter is the substance of which all physical objects are made.) Chemistry deals with the properties of matter, and the transformation and interactions of matter and energy. Central to chemistry is the interaction of one substance with another, such as in a chemical reaction, where a substance or substances are transformed into another.',
                numReviews: 30,
                numStars: 3,
                imgSrc: '/images/subjects/chemistry.jpg'
            },
            {
                cardId: 3,
                price: '',
                title: 'American Government',
                description: 'The Federal Government of the United States is the federal government of the United States, a republic in North America, composed of 50 states, one district, Washington, D.C. (the nations capital), and several territories. The federal government is composed of three distinct branches: legislative, executive, and judicial, whose powers are vested by the U.S. Constitution in the Congress, the President, and the federal courts, including the Supreme Court, respectively.',
                numReviews: 30,
                numStars: 3,
                imgSrc: '/images/subjects/american_gov.jpg'
            },
            {
                cardId: 4,
                price: '',
                title: 'Spanish I',
                description: 'This  online audio lesson will teach you how to describe people in Spanish. With these Spanish adjectives on hand youll be able to talk about a person’s appearance in Spanish and the kind of person they are as well.',
                numReviews: 30,
                numStars: 3,
                imgSrc: '/images/subjects/spanish.jpg'
            }
        ]
    };

    constructor(props) {
        super(props);

        this.getCards = this.getCards.bind(this);
    }

    getCards() {
        return this.props.cards.map(function (card) {
            return (<ExploreCard key={'explore-card-' + card.cardId}
                                 cardId={card.cardId}
                                 title={card.title}
                                 description={card.description}
                                 numReviews={card.numReviews}
                                 numStars={card.numStars}
                                 imgSrc={card.imgSrc}/>);
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