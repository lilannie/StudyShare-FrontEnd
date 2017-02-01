import React from 'react';

import '../../../scss/browse.scss';

export default class ExploreCard extends React.Component {
    static defaultProps = {
        cardId: 0,
        price: '',
        title: 'Calculus',
        description: 'Calculus is fun (sometimes) (;',
        numReviews: 15,
        numStars: 2,
        imgSrc: 'http://placehold.it/320x150',
        starsStyle: {
            marginLeft: 10
        },
        ribbonStyle: {
            zIndex: 100,
            marginLeft: -10
        }
    };

    constructor(props) {
        super(props);

        this.getStars = this.getStars.bind(this);
    }

    getStars() {
        let list = [];
        for (let i = 0; i < this.props.numStars; i++) {
            list.push(<span key={'star-'+this.props.cardId+'-'+i}
                            className="glyphicon glyphicon-star"></span>);
        }
        for (let i = this.props.numStars; i < 5; i++) {
            list.push(<span key={'star-'+this.props.cardId+'-'+i}
                            className="glyphicon glyphicon-star-empty"></span>);
        }
        return list;
    }

    render() {
        return (
            <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                    <img src={this.props.imgSrc} alt=""/>
                    <div className="ribbon" style={this.props.ribbonStyle}>
                        Share
                    </div>
                    <div className="caption">
                        <h4 className="pull-right">{this.props.price}</h4>
                        <h4 className="thumbnail-title"><a href="#">{this.props.title}</a>
                        </h4>
                        {this.props.description}
                    </div>
                    <div className="ratings">
                        <p className="pull-right">{this.props.numReviews} reviews</p>
                        <div className="stars" style={this.props.starsStyle}>
                            {this.getStars()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}