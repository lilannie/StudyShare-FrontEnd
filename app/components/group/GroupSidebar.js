import React from 'react';

import '../../scss/group.scss';

export default class GroupSidebar extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="group-sidebar">
                <a id="menu-toggle"
                   className="btn btn-dark btn-lg"
                    onClick={toggleGroupSidebar}>
                    <i className="fa fa-2x fa-bars"></i>
                </a>
                <nav id="sidebar-wrapper" className="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li id="menu-close"
                           className="btn btn-light btn-lg
                                pull-right toggle"
                           onClick={toggleGroupSidebar}>
                            <i className="fa fa-times"></i>
                        </li>
                        <li className="sidebar-brand"
                            onClick={toggleGroupSidebar}>
                            <i className="fa fa-home"></i>
                            Home
                        </li>
                        <li onClick={toggleGroupSidebar}>
                                Home
                        </li>
                        <li onClick={toggleGroupSidebar}>
                            About
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}