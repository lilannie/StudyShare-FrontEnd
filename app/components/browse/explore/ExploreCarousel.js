import React from 'react';
import ExploreCarouselItem from './ExploreCarouselItem';

import '../../../scss/browse.scss';

export default class ExploreCarousel extends React.Component {
    static defaultProps = {
        carouselStyle: {
            marginBottom: 30
        },
        carouselSlides: [
            {
                id: 0
            },
            {
                id: 1
            },
            {
                id: 2
            }
        ]
    };

    constructor(props) {
        super(props);

        this.getItems = this.getItems.bind(this);
        this.getIndicators = this.getIndicators.bind(this);
    }

    getItems() {
        let firstFlag = true;
        return this.props.carouselSlides.map(function (slide) {
            if (firstFlag) {
                firstFlag = false;
                return (<ExploreCarouselItem
                    key={slide.id} isActive={true}/>);
            }
            return (<ExploreCarouselItem key={slide.id}/>)
        });
    }

    getIndicators() {
        let firstFlag = true;
        let count = 0;
        return this.props.carouselSlides.map(function () {
            let indicator = (<li data-target="#carousel-example-generic"
                                 data-slide-to={count}
                                 key={'indicator-' + count}></li>);
            if (firstFlag) {
                firstFlag = false;
                indicator = (<li data-target="#carousel-example-generic"
                                 data-slide-to={count}
                                 key={'indicator-' + count}
                                 className="active"></li>);
            }
            count++;
            return indicator;
        });
    }

    render() {
        return (
            <div className="row carousel-holder"
                 style={this.props.carouselStyle}>
                <div className="col-md-12">
                    <div id="carousel-example-generic"
                         className="carousel slide"
                         data-ride="carousel">
                        <ol className="carousel-indicators">
                            {this.getIndicators()}
                        </ol>
                        <div className="carousel-inner">
                            {this.getItems()}
                        </div>
                        <a className="left carousel-control"
                           href="#carousel-example-generic"
                           data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a className="right carousel-control"
                           href="#carousel-example-generic"
                           data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}