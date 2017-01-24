import React from 'react';

import BrowseCard from './BrowseCard';

export default class BrowseRow extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="row">
                <BrowseCard/>
                <BrowseCard/>
                <BrowseCard/>
                <BrowseCard/>
                <BrowseCard/>
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