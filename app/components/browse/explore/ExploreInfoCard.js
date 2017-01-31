import React from 'react';
import {Link} from 'react-bootstrap';

import '../../../scss/browse.scss';

export default class ExploreInfoCard extends React.Component {
    static defaultProps = {
        addLink: '/subjects'
    };

    render() {
        return (
            <div className="info-container col-sm-4 col-lg-4 col-md-4">
                <h4 className="info-title">
                    Can't find what you're looking for?
                </h4>
                <a className="btn info-btn" target="_blank"
                   href={this.props.addLink}>
                    Create One
                </a>
            </div>
        );
    }
}