import React from 'react';

import '../../../scss/browse.scss';

export default class ExploreToolbar extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);
    }

    changeView(id) {
        this.props.changeView(id);
    }


    render() {
        return (
            <div className="col-md-2">
                <h4 className="lead">Types</h4>
                <div className="list-group">
                    <a className="list-group-item" onClick={this.changeView.bind(null, 0)}>Subjects</a>
                    <a className="list-group-item" onClick={this.changeView.bind(null, 1)}>Notebooks</a>
                    <a className="list-group-item" onClick={this.changeView.bind(null, 2)}>Notecards</a>
                </div>
            </div>
        );
    }
}