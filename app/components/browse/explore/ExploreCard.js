import React from 'react';

import '../../../scss/browse.scss';

export default class Browse extends React.Component {
    static defaultProps = {
        id: 0,
        price: '',
        title: 'Calculus',
        description: 'Calculus is fun (sometimes) (;',
        numReviews: 15,
        numStars: 2,
        starsStyle: {
            marginLeft: 10
        }
    };

    constructor(props) {
        super(props);

        this.getStars = this.getStars.bind(this);
    }

    getStars() {
        let list = [];
        for (let i = 0; i < this.props.numStars; i++) {
            list.push(<span key={'star-'+this.props.id+'-'+i}
                            className="glyphicon glyphicon-star"></span>);
        }
        for (let i = this.props.numStars; i < 5; i++) {
            list.push(<span key={'star-'+this.props.id+'-'+i}
                            className="glyphicon glyphicon-star-empty"></span>);
        }
        return list;
    }

    render() {
        return (
            <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                    <img src="http://placehold.it/320x150" alt=""/>
                    <div className="caption">
                        <h4 className="pull-right">{this.props.price}</h4>
                        <h4><a href="#">{this.props.title}</a>
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