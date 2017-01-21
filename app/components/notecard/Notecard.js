import React from 'react';

import '../../scss/notecard.scss';

export default class Notecard extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="notecard">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1">
                            <div className="col-md-4 col-sm-6">
                                <div className="card-container manual-flip">
                                    <div className="card">
                                        <div className="front">
                                            <div className="cover">
                                                <img
                                                    src="https://www.clipartsgram.com/image/124089475-california-beaches-tumblr-wallpaper-3.jpg"/>
                                            </div>
                                            <div className="user">
                                                <img className="img-circle"
                                                     src="http://www.outbrain.com/risingstars/wp-content/uploads/708x708-RS-Profile-Ashley-Callahan-400x400.jpg"/>
                                            </div>
                                            <div className="content">
                                                <div className="main">
                                                    <h3 className="name">Andrew Mike</h3>
                                                    <p className="profession">Web Developer</p>
                                                    <p className="text-center">"Lamborghini Mercy <br/>Your chick she so
                                                        thirsty
                                                        <br/>I'm
                                                        in that two seat Lambo"</p>
                                                </div>
                                                <div className="footer">
                                                    <button className="btn btn-simple" onClick={rotateCard(this)}>
                                                        <i className="fa fa-mail-forward"></i> Manual Rotation
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="back">
                                            <div className="header">
                                                <h5 className="motto">"To be or not to be, this is my awesome
                                                    motto!"</h5>
                                            </div>
                                            <div className="content">
                                                <div className="main">
                                                    <h4 className="text-center">Job Description</h4>
                                                    <p className="text-center">Web design, Adobe Photoshop, HTML5, CSS3,
                                                        Corel and
                                                        many
                                                        others...</p>

                                                    <div className="stats-container">
                                                        <div className="stats">
                                                            <h4>235</h4>
                                                            <p>
                                                                Followers
                                                            </p>
                                                        </div>
                                                        <div className="stats">
                                                            <h4>114</h4>
                                                            <p>
                                                                Following
                                                            </p>
                                                        </div>
                                                        <div className="stats">
                                                            <h4>35</h4>
                                                            <p>
                                                                Projects
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="footer">
                                                <button className="btn btn-simple" rel="tooltip" title="Flip Card"
                                                        onClick={rotateCard(this)}>
                                                    <i className="fa fa-reply"></i> Back
                                                </button>
                                                <div className="social-links text-center">
                                                    <a href="http://deepak646.blogspot.in/" className="facebook"><i
                                                        className="fa fa-facebook fa-fw"></i>
                                                    </a>
                                                    <a href="http://deepak646.blogspot.in/" className="google">
                                                        <i
                                                            className="fa fa-google-plus fa-fw"></i></a>
                                                    <a href="http://deepak646.blogspot.in/" className="twitter">
                                                        <i
                                                            className="fa fa-twitter fa-fw"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
        $('[rel="tooltip"]').tooltip();
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
