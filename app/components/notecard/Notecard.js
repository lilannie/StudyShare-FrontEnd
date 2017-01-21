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
                <div className="info-card">
                    <div className="front">
                        <img className="card-image" src="http://i.imgur.com/QHxnyes.jpg?1"/>
                    </div>
                    <div className="back">
                        <h2>Gentlesir</h2>
                        <p>
                            Globally facilitate timely bandwidth vis-a-vis user friendly core competencies. Uniquely architect covalent e-tailers through viral Lorem ipsum dolor sit amet, con.
                        </p>
                        <div className="social">
                            <a href="#" className="social-icon facebook  animate">
                                <span className="fa fa-facebook"></span>
                            </a>

                            <a href="https://twitter.com/MichaelCanlas7" target="_blank" className=" social-icon twitter  animate"><span className="fa fa-twitter"></span></a>

                            <a href="https://github.com/ironprice91" target="_blank" className=" social-icon github  animate"><span className="fa fa-github-alt"></span></a>

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
