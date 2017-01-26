import React from 'react';

import '../../../scss/group-dashboard.scss';

export default class GroupToolbar extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };
    state = {
        foo: 'bar'
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="group-toolbar">
                <div className="container-fluid">
                    <div className="quick-actions_homepage">
                        <ul className="quick-actions">
                            <li className="span3">
                                Subjects
                            </li>
                            <li className="span3">
                                Notebooks
                            </li>
                            <li className="span3">
                                Notecards

                            </li>
                            <li className="span3">
                                Discussion
                            </li>
                            <li className="span3">
                                Members
                            </li>
                            <li className="span3">
                                Settings
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}