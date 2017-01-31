import React from 'react';

import '../../../scss/browse.scss';

export default class ExploreCarouselItem extends React.Component {
    static defaultProps = {
        isActive: false,
        imgSrc: 'http://placehold.it/800x300',
        imgAlt: 'Carousel Item'
    };

    render() {
        let img = (<img className="slide-image" src={this.props.imgSrc}
                        alt={this.props.imgAlt}/>);
        if (this.props.isActive) {
            return (
                <div className="item active">
                    {img}
                </div>
            );
        }
        return (
            <div className="item ">
                {img}
            </div>
        );
    }
}