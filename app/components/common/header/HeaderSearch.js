import React from 'react';

import {Link} from 'react-router';

export default class HeaderSearch extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    handleSelect(selectedKey) {

    }

    render() {
        return (
            <form className="navbar-form navbar-right" role="search">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                    <span className="input-group-btn">
                        <Link to={'/search'}>
                        <button className="btn btn-default" type="submit">
                            <span className="glyphicon glyphicon-search" aria-hidden="true">
                            </span>
                        </button>
                        </Link>
                    </span>
                </div>
            </form>
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