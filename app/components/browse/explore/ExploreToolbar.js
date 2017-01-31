import React from 'react';

import '../../../scss/browse.scss';

export default class ExploreToolbar extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };


    render() {
        return (
            <div className="col-md-2">
                <h4 className="lead">Types</h4>
                <div className="list-group">
                    <a href="#" className="list-group-item">Subjects</a>
                    <a href="#" className="list-group-item">Notebooks</a>
                    <a href="#" className="list-group-item">Notecards</a>
                </div>
            </div>
        );
    }
}