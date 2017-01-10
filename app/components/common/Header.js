import React from 'react';

export default class Header extends React.Component {
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
            <div id="navbar-wrapper">
                <header>
                    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse"
                                        data-target="#navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">Sidebar Template</a>
                            </div>
                            <div id="navbar-collapse" className="collapse navbar-collapse">
                                <form className="navbar-form navbar-left" role="search">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search" />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="submit">
                                        <span className="glyphicon glyphicon-search" aria-hidden="true">

                                        </span>
                                    </button>
                                </span>
                                    </div>
                                </form>
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="dropdown">
                                        <a id="flag" href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <img
                                                src="http://www.country-dialing-codes.net/img/png-country-4x2-fancy-res-1280x960/gb.png"
                                                alt="English" width="28px" height="18px"/>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-flag" role="menu">
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="http://www.country-dialing-codes.net/img/png-country-4x2-flat-res-640x480/gf.png"
                                                        alt="Français" width="28px" height="18px"/>
                                                    <span>Français</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a id="user-profile" href="#" className="dropdown-toggle"
                                           data-toggle="dropdown">
                                            <img src="http://lorempixel.com/100/100/people/9/"
                                                 className="img-responsive img-thumbnail img-circle"/>
                                            Username</a>
                                        <ul className="dropdown-menu dropdown-block" role="menu">
                                            <li><a href="#">Profil edition</a></li>
                                            <li><a href="#">Admin</a></li>
                                            <li><a href="#">Logout</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
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