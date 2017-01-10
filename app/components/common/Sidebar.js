import React from 'react';

export default class Sidebar extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div id="wrapper">
                <div id="sidebar-wrapper">
                    <aside id="sidebar">
                        <ul id="sidemenu" className="sidebar-nav">
                            <li>
                                <a href="#">
                                    <span className="sidebar-icon">
                                        <i className="fa fa-dashboard"></i>
                                    </span>
                                    <span className="sidebar-title">
                                        Home
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className="accordion-toggle collapsed toggle-switch" data-toggle="collapse"
                                   href="#submenu-2">
                                    <span className="sidebar-icon">
                                        <i className="fa fa-users"></i>
                                    </span>
                                    <span className="sidebar-title">
                                        Management
                                    </span>
                                    <b className="caret"></b>
                                </a>
                                <ul id="submenu-2" className="panel-collapse collapse panel-switch" role="menu">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right"></i>Users
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right"></i>Roles
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="accordion-toggle collapsed toggle-switch" data-toggle="collapse"
                                   href="#submenu-3">
                                    <span className="sidebar-icon">
                                        <i className="fa fa-newspaper-o"></i>
                                    </span>
                                    <span className="sidebar-title">
                                        Blog
                                    </span>
                                    <b className="caret"></b>
                                </a>
                                <ul id="submenu-3" className="panel-collapse collapse panel-switch" role="menu">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right"></i>Posts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right"></i>Comments
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="sidebar-icon">
                                        <i className="fa fa-database"></i>
                                    </span>
                                    <span className="sidebar-title">
                                        Data
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="sidebar-icon">
                                        <i className="fa fa-terminal"></i>
                                    </span>
                                    <span className="sidebar-title">
                                        Console
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </aside>
                </div>
                <main id="page-content-wrapper" role="main">
                </main>
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

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

}