import React from 'react';
import {Link} from 'react-router';

export default class BrowseCard extends React.Component {
    static defaultProps = {
        link: '/subjects'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="browse-card col-md-2 portfolio-item">
                <Link to={this.props.link}>
                </Link>
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